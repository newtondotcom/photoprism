import * as FileSystem from 'expo-file-system';
import dayjs from 'dayjs';
import { Album } from '@/src/types';
import { save, getValueFor } from '@/src/store';

// OK - manque test dynamique token
export async function getToken() {
  let endpoint = await getValueFor('endpoint');
  let username = await getValueFor('username');
  let password = await getValueFor('password');
  let token = await getValueFor('token');
  let token_expiry_time = await getValueFor('token_expiry_time');

  if (!token_expiry_time) {
    token_expiry_time = new Date().toString();
  }

  if (token && dayjs().isBefore(token_expiry_time)) {
    return token;
  }

  try {
    let data = {
      username,
      password
    };
    
    let response;
    try {
      response = await fetch(`${endpoint}/api/v1/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        },
        body: JSON.stringify(data)
      });
      console.log("Token en cours de récupération : ", response);
    } catch (e) {
      console.log("Fetch error:", e);
      throw e;
    }

    let responseData = await response.json();

    var now = dayjs();
    token_expiry_time = now.add(responseData.expires_in, 'second').toString();
    token = responseData.access_token;
    let user_id = responseData.user.UID;

    console.log("Token récupéré : ", token);
    console.log("Token expiration : ", token_expiry_time);
    console.log("User ID : ", user_id);


    await save("token_expiry_time", token_expiry_time);
    await save("token", token);
    await save("user_id", user_id);
    return "ok"
  } catch (e) {
    console.log("Error processing token:", e);
    return "ko";
  }
}


export async function getAlbums(count: Number = 24, offset: Number = 0, type: string = "album"): Promise<Album[] | null> {
  let endpoint = await getValueFor('endpoint');
  let token = await getValueFor('token');

  let query_object = { count: count.toString(), offset: offset.toString(), type };
  let query_string = new URLSearchParams(query_object).toString();
  //?${query_string}
  try {
    let response = await fetch(`${endpoint}/api/v1/albums`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': token
      }
    });

    let responseData = await response.json();
    console.log("Albums récupérés : ", responseData);
    return responseData;
  } catch (e) {
    console.log(e);
    console.log("Error fetching albums");
  }
}


// OK
export async function createAlbum(album: Album): Promise<Album> {
  let endpoint = await getValueFor('endpoint');
  let token = await getValueFor('token');

  try {
    let response = await fetch(`${endpoint}/api/v1/albums`, {
      method: 'POST',
      headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    });

    let responseData = await response.json();
    const dateCreated = new Date(responseData.CreatedAt);
    const author = responseData.CreatedAt;
    const threshold =  1000 * 60 * 2 ; // 2 minutes
    if (dateCreated.getTime() - new Date().getTime() >threshold) {
      console.log("Album déjà créé par un autre utilisateur : ", author);
    }
    return responseData;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function uploadPhotoToAlbum(albumUIDs: Array<string>, photoUri: string): Promise<Boolean> {
  let endpoint = await getValueFor('endpoint');
  let token = await getValueFor('token');
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
    console.log(e);
    throw e;
  }
}
