import {useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {
  uploadPhotoToAlbum,
  getPhotos,
} from "@/scripts/photoprism";
import { AlbumExpo, Asset ,PagedInfo} from "@/scripts/types/expo";
import { getValueFor } from "@/scripts/store";
import { PhotoPrismOrder, SearchPhotos } from "@/scripts/types/photoprism";

export default async function App() {


  const endpoint = await getValueFor("endpoint");
  const token = await getValueFor("token");
  const user_id = await getValueFor("user_id");
  const albumUID: string = await getValueFor('albumUID');

  async function syncLibraryToAlbum(): Promise<string> {
  const count: number = 200;

  // Initialize photos array
  let photos: PhotoPrismMergedPhoto[] = [];

  // Fetch the photos from PhotoPrism in the specified album
  const params: SearchPhotos = { count: count};
  let photosFetched: PhotoPrismMergedPhoto[] = await getPhotos(params);
  photos.push(...photosFetched);

  // Keep fetching until all photos are retrieved
  while (photosFetched.length === count) {
    const offset = photos.length;
    params.offset = offset;
    photosFetched = await getPhotos(params);
    photos.push(...photosFetched);
    console.log(`Fetched ${photos.length} photos from PhotoPrism album`);
  }

  console.log(`Fetched ${photos.length} photos from PhotoPrism album`);

  // Fetch all assets from the local library
  const assets: Asset[] = await MediaLibrary.getAssetsAsync({ first: 10000 }).then(result => result.assets);

  console.log(`Fetched ${assets.length} assets from local library`);

  // Compute the deleted items (assets in PhotoPrism but not on phone)
  const assetDeleted: PhotoPrismMergedPhoto[] = photos.filter(photo  => 
    !assets.some(asset => 
      asset.filename.includes(photo.OriginalName)
    )
  );
  if (assetDeleted.length > 0) {
    console.log(`Found ${assetDeleted.length} deleted assets`);
  } else {
    console.log(`No deleted assets found`);
  }

  // Delete the missing assets from PhotoPrism
  const deletedPhotosUIDs: string[] = assetDeleted.map(photo => photo.UID);
  //await batchPhotosDelete(deletedPhotosUIDs);

  // Compute the missing elements (assets on phone but not in PhotoPrism)
  const missingAssets: Asset[] = assets.filter(asset =>
    !photos.some(photo =>
      asset.filename.includes(photo.OriginalName)
    )
  );

  if (missingAssets.length === 0 && missingAssets.length === 0) {
    console.log(`No missing assets found`);
    return 'ok';
  } else {
    console.log(`Found ${missingAssets.length} missing assets to upload`);
  }

  // Find the best batch size
  let bestBatchSize = 1;
  let previousBatchTimePerFile = Infinity;
  let currentBatchSize = 1;
  let batchSizeLimit = missingAssets.length;

  while (currentBatchSize <= batchSizeLimit) {
    const startTime = Date.now();

    for (let i = 0; i < missingAssets.length; i += currentBatchSize) {
      const batchAssets: Asset[] = missingAssets.slice(i, i + currentBatchSize);
      const uploadPromises = batchAssets.map(asset => uploadPhotoToAlbum([albumUID], asset.uri, asset , endpoint, token, user_id));
      await Promise.all(uploadPromises);
    }

    const endTime = Date.now();
    const batchDuration = endTime - startTime;
    const batchTimePerFile = batchDuration / missingAssets.length;

    console.log(`Batch size: ${currentBatchSize}, Total time: ${batchDuration}ms, Time per file: ${batchTimePerFile}ms`);

    if (batchTimePerFile > previousBatchTimePerFile) {
      break;
    } else {
      previousBatchTimePerFile = batchTimePerFile;
      bestBatchSize = currentBatchSize;
      currentBatchSize *= 2;
    }
  }

  console.log(`Best batch size: ${bestBatchSize}`);

  // Use the best batch size for the final upload
  for (let i = 0; i < missingAssets.length; i += bestBatchSize) {
    const batchAssets: Asset[] = missingAssets.slice(i, i + bestBatchSize);
    const uploadPromises = batchAssets.map(asset => uploadPhotoToAlbum([albumUID], asset.uri, asset , endpoint, token, user_id));
    await Promise.all(uploadPromises);
  }

  console.log(`Uploaded all missing assets to PhotoPrism album`);

  return 'ok';
}

  async function syncLibrary() {
    await syncLibraryToAlbum();
  }

  async function test() {
    const assets : PagedInfo<Asset> = await MediaLibrary.getAssetsAsync();
    // console.log(assets.assets[0]); -> OK
    //await createAlbum({ Title: "test2"}); //-> OK
    //const albums = await getAlbums(); -> OK
    //await syncLibrary(); // -> OK mais pas opti
    //const albumUId = "asfamjvhl60erzg6";
    // await getAlbumDetails(albumUId); --> OK
    //const params : SearchPhotos = { count : 30};
    //const photos = await getPhotos(params)
    //const photoid = photos[0].UID; //-> OK
    ///batchAlbumsDelete(["asfamjvhl60erzg6"]);
    //await batchPhotosDelete([photoid]);
    await uploadPhotoToAlbum([albumUID], assets.assets[0].uri, assets.assets[0], endpoint, token, user_id);
  }

  return (
    <View>
      <Text>Photoprism React Native Example</Text>
      <View style={{ marginVertical: 50 }}>
        <Button title="Sync Library" onPress={syncLibrary} />
        <Button title="test" onPress={test} />
      </View>
    </View>
  );
}
