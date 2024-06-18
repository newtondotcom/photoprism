import * as FileSystem from 'expo-file-system';
import dayjs from 'dayjs';
import { Album } from '@/src/types';
import { ofetch } from 'ofetch';
import { save, getValueFor } from '@/src/store';

export async function getToken() {
  let endpoint = getValueFor('endpoint');
  let username = getValueFor('username');
  let password = getValueFor('password');
  let token = getValueFor('token');
  let token_expiry_time = getValueFor('token_expiry_time');

  if (!token_expiry_time) {
    token_expiry_time = new Date();
  }

  if (token && dayjs().isBefore(token_expiry_time)) {
    return token;
  }

  try {
    let data = {
      username,
      password,
      code: ""
    };

    console.log("Token en cours de récupération : ",data);
    let response;
    try {
      response = await ofetch(`${endpoint}/api/v1/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log("Token en cours de récupération : ",response);
    } catch (e) {
      console.log(e);
      throw e;
    }

    let responseData = await response.json();
    console.log("Token réussi : ",responseData);

    var now = dayjs();
    token_expiry_time = now.add(responseData.expires_in, 'second').toDate();
    token = responseData.access_token;
    let user_id = responseData.user.UID;

    save("token_expiry_time",token_expiry_time);
    save("token",token);
    save("user_id",user_id);
  } catch (e) {
    console.log(e);
    throw e;
  }

  return token;
}

export async function getAlbums(count: Number = 24, offset: Number = 0, type: string = "album"): Promise<Album[] | null> {
  let endpoint = getValueFor('endpoint');
  let token = await getToken();

  let query_object = { count: count.toString(), offset: offset.toString(), type };
  let query_string = new URLSearchParams(query_object).toString();

  try {
    let response = await ofetch(`${endpoint}/api/v1/albums?${query_string}`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': token
      }
    });

    let responseData = await response.json();
    return responseData;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function createAlbum(album: Album): Promise<Album> {
  let endpoint = getValueFor('endpoint');
  let token = await getToken();

  try {
    let response = await ofetch(`${endpoint}/api/v1/albums`, {
      method: 'POST',
      headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    });

    let responseData = await response.json();
    return responseData;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function uploadPhotoToAlbum(albumUIDs: Array<string>, photoUri: string): Promise<Boolean> {
  let endpoint = getValueFor('endpoint');
  let token = await getToken();
  let user_id = getValueFor('user_id');

  const uploadId = (Math.random() + 1).toString(36).substring(6);
  const url = `${endpoint}/api/v1/users/${user_id}/upload/${uploadId}`;

  try {
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadTask = FileSystem.createUploadTask(
        url,
        photoUri,
        {
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
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
  } catch (e) {
