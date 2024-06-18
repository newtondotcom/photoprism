import * as FileSystem from 'expo-file-system';
import dayjs from 'dayjs';
import { Album } from './types';

export default class Photoprism {
    private endpoint: string;
    private username: string;
    private password: string;
    private token: string;
    private token_expiry_time: Date;
    private user_id: string;

    constructor(endpoint: string, username: string, password: string) {
        this.endpoint = endpoint;
        this.username = username;
        this.password = password;
        this.token = "";
        this.user_id = "";
        this.token_expiry_time = new Date();
    }

    public async getToken(): Promise<string> {
        if (this.token && dayjs().isBefore(this.token_expiry_time)) {
            return this.token;
        }

        let data = {
            username: this.username,
            password: this.password,
            code: ""
        };

        let response = await fetch(`${this.endpoint}/api/v1/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let responseData = await response.json();

        var now = dayjs();
        this.token_expiry_time = now.add(responseData.expires_in, 'second').toDate();
        this.token = responseData.access_token;
        this.user_id = responseData.user.UID;

        return this.token;
    }

    public async getAlbums(count: Number = 24, offset: Number = 0, type: string = "album"): Promise<Album[] | null> {
        let token = await this.getToken();

        let query_object = { count: count.toString(), offset: offset.toString(), type };
        let query_string = new URLSearchParams(query_object).toString();

        let response = await fetch(`${this.endpoint}/api/v1/albums?${query_string}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': token
            }
        });

        let responseData = await response.json();

        return responseData;
    }

    public async createAlbum(album: Album): Promise<Album> {
        let token = await this.getToken();

        let response = await fetch(`${this.endpoint}/api/v1/albums`, {
            method: 'POST',
            headers: {
                'X-Auth-Token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        });

        let responseData = await response.json();

        return responseData;
    }

    public async uploadPhotoToAlbum(albumUIDs: Array<string>, photoUri: string): Promise<Boolean> {
        const token = await this.getToken();

        const uploadId = (Math.random() + 1).toString(36).substring(6);
        const url = `${this.endpoint}/api/v1/users/${this.user_id}/upload/${uploadId}`;

        const uploadPromise = new Promise((resolve, reject) => {
            const uploadTask = FileSystem.createUploadTask(
                url,
                photoUri,
                {
                    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                    fieldName: 'file', // Name of the form field
                    mimeType: 'image/jpeg', // or your file type
                    parameters: {
                        albums: JSON.stringify(albumUIDs)
                    },
                    headers: {
                        'X-Auth-Token': token,
                    }
                },
                ({ totalBytesSent, totalBytesExpectedToSend }) => {
                    console.log(`Upload progress: ${totalBytesSent} / ${totalBytesExpectedToSend}`);
                }
            );

            uploadTask.then(({ body, status }) => {
                if (status === 200) {
                    resolve(true);
                } else {
                    reject(new Error('Upload failed'));
                }
            }).catch(reject);
        });

        return uploadPromise;
    }
}
