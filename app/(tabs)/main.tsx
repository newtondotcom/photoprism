import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {
  getAlbums,
  uploadPhotoToAlbum,
  createAlbum,
  getAlbumDetails,
  getPhotos,
  batchAlbumsDelete,
} from "@/scripts/photoprism";
import { AlbumExpo, Asset ,PagedInfo} from "@/scripts/types/expo";

export default function App() {
  async function getPermission() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }

  async function syncLibrary() {
    const albumUId = "asfamjvhl60erzg6";

    try {
      const assets = await MediaLibrary.getAssetsAsync();
      const asset = assets.assets[1];
      const uploadPromises = assets.assets.map(async (asset) => {
        const uri = asset.uri;
        await uploadPhotoToAlbum([albumUId], uri);
      });
      await Promise.all(uploadPromises);
    } catch (error) {
      console.log("Error uploading photos", error);
    }
  }

  async function test() {
    const assets : PagedInfo<Asset> = await MediaLibrary.getAssetsAsync();
    // console.log(assets.assets[0]); -> OK
    //await createAlbum({ Title: "test2"}); //-> OK
    //const albums = await getAlbums(); -> OK
    // syncLibrary(); -> OK mais pas opti
    const albumUId = "asfamjvhl60erzg6";
    // await getAlbumDetails(albumUId); --> OK
    //const params : GetPhotosParams = { count : 24, offset:  0, order : PhotoPrismOrder.NEWEST, public : true, q:  undefined };
    // await getPhotos(params); -> OK
    batchAlbumsDelete(["asfamjvhl60erzg6"]);
  }

  useEffect(() => {
    getPermission();
  }, []);

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
