import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { uploadPhotoToAlbum, getPhotos } from "@/scripts/photoprism";
import { Asset, PagedInfo } from "@/scripts/types/expo";
import { getValueFor } from "@/scripts/store";
import {
  PhotoPrismMergedPhoto,
  SearchPhotos,
} from "@/scripts/types/photoprism";
import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Spinner,
  View,
  Text,
  Button,
} from "@gluestack-ui/themed";

export default async function App() {
  const [endpoint, setEndpoint] = useState("");
  const [token, setToken] = useState("");
  const [user_id, setUserId] = useState("");
  const [albumUID, setAlbumUID] = useState("");
  const [localAssets, setLocalAssets] = useState([]);
  const [prismAssets, setPrismAssets] = useState([]);
  const [assetsToDelete, setAssetsToDelete] = useState([]);
  const [assetsToUpload, setAssetsToUpload] = useState([]);
  const [loading, setLoading] = useState(true);
  const count: number = 200;

  useEffect(() => {
    async function fetchConstants() {
      try {
        const fetchedEndpoint = await getValueFor("endpoint");
        const fetchedToken = await getValueFor("token");
        const fetchedUserId = await getValueFor("user_id");
        const fetchedAlbumUID = await getValueFor("album_id");
        setEndpoint(fetchedEndpoint);
        setToken(fetchedToken);
        setUserId(fetchedUserId);
        setAlbumUID(fetchedAlbumUID);
        console.log(
          "Fetched constants:",
          fetchedEndpoint,
          fetchedToken,
          fetchedUserId,
          fetchedAlbumUID,
        );
      } catch (error) {
        console.error("Error fetching constants:", error);
      }
    }

    async function fetchAssets() {
      // Fetch all assets from the local library
      const assets: Asset[] = await MediaLibrary.getAssetsAsync({
        first: 10000,
      }).then((result) => result.assets);
      setLocalAssets(assets);
      console.log(`Fetched ${assets.length} assets from local library`);
    }

    async function fetchPhotoPrism() {
      // Initialize photos array
      let photos: PhotoPrismMergedPhoto[] = [];

      // Fetch the photos from PhotoPrism in the specified album
      const params: SearchPhotos = { count: count };
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

      setPrismAssets(photos);
      console.log(`Fetched ${photos.length} photos from PhotoPrism album`);
    }

    function computeDiff() {
      // Compute the deleted items (assets in PhotoPrism but not on phone)
      const assetDeleted: PhotoPrismMergedPhoto[] = prismAssets.filter(
        (photo) =>
          !localAssets.some((asset) =>
            asset.filename.includes(photo.OriginalName),
          ),
      );
      setAssetsToDelete(assetDeleted);
      if (assetDeleted.length > 0) {
        console.log(`Found ${assetDeleted.length} deleted assets`);
      } else {
        console.log(`No deleted assets found`);
      }

      // Compute the missing elements (assets on phone but not in PhotoPrism)
      const missingAssets: Asset[] = localAssets.filter(
        (asset) =>
          !prismAssets.some((photo) =>
            asset.filename.includes(photo.OriginalName),
          ),
      );
      setAssetsToUpload(missingAssets);
      if (missingAssets.length === 0 && missingAssets.length === 0) {
        console.log(`No missing assets found`);
        return "ok";
      } else {
        console.log(`Found ${missingAssets.length} missing assets to upload`);
      }
    }

    fetchConstants();
    fetchAssets();
    fetchPhotoPrism();
    computeDiff();
    setLoading(true);
  }, []);

  // Delete the assets only present on phone from PhotoPrism
  async function deleteAssets() {
    const deletedPhotosUIDs: string[] = assetsToDelete.map(
      (photo) => photo.UID,
    );
    //await batchPhotosDelete(deletedPhotosUIDs);
  }

  // Upload the missing assets missing from PhotoPrism
  async function uploadAssetsToPhotoSync(): Promise<string> {
    // Find the best batch size
    let bestBatchSize: number = 1;
    let previousBatchTimePerFile: number = Infinity;
    let batchTimePerFile: number = 1;
    let currentBatchSize: number = 1;
    const batchSizeLimit: number = assetsToUpload.length;
    let indexUploaded: number = 0;

    while (
      batchTimePerFile < previousBatchTimePerFile &&
      currentBatchSize <= batchSizeLimit
    ) {
      const startTime: number = Date.now();

      const batchAssets: Asset[] = assetsToUpload.slice(
        indexUploaded,
        indexUploaded + currentBatchSize,
      );
      const uploadPromises = batchAssets.map((asset) =>
        uploadPhotoToAlbum(
          [albumUID],
          asset,
          endpoint,
          token,
          user_id,
        ),
      );
      await Promise.all(uploadPromises);
      indexUploaded += currentBatchSize;

      const endTime: number = Date.now();
      const batchDuration: number = endTime - startTime;
      batchTimePerFile = batchDuration / batchAssets.length;

      console.log(
        `Batch size: ${currentBatchSize}, Total time: ${batchDuration} ms, Time per file: ${batchTimePerFile} ms`,
      );

      if (batchTimePerFile > previousBatchTimePerFile) {
        console.log(
          `############################### Optimal batch size found: ${bestBatchSize}`,
        );
        break;
      } else {
        previousBatchTimePerFile = batchTimePerFile;
        bestBatchSize = currentBatchSize;
        currentBatchSize *= 2;
        console.log(
          `############################### Not optimal batch size: ${bestBatchSize}`,
        );
      }
    }
    console.log(`Best batch size: ${bestBatchSize}`);

    // Use the best batch size for the final upload
    for (let i = indexUploaded; i < assetsToUpload.length; i += bestBatchSize) {
      const batchAssets: Asset[] = assetsToUpload.slice(i, i + bestBatchSize);
      const uploadPromises = batchAssets.map((asset) =>
        uploadPhotoToAlbum(
          [albumUID],
          asset,
          endpoint,
          token,
          user_id,
        ),
      );
      await Promise.all(uploadPromises);
    }

    console.log(`Uploaded all missing assets to PhotoPrism album`);
    return "ok";
  }

  async function syncLibrary() {
    await deleteAssets();
    await uploadAssetsToPhotoSync();
  }

  async function test() {
    const assets: PagedInfo<Asset> = await MediaLibrary.getAssetsAsync();
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
    await uploadPhotoToAlbum(
      [albumUID],
      assets.assets[0],
      endpoint,
      token,
      user_id,
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Récupération des données</Text>
        <Spinner size="large" />
      </View>
    );
  }
  return (
    <View>
      <Text>Photoprism React Native Example</Text>
      <View style={{ marginVertical: 50 }}>
        <Button title="Sync Library" onPress={syncLibrary} />
        <Button title="test" onPress={test} />

        <Alert mx="$2.5" action="info" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>
            {assetsToDelete.length} have been deleted from your phone
          </AlertText>
        </Alert>
        <Alert mx="$2.5" action="info" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>
            {assetsToUpload.length} need to be uploaded to PhotoPrism
          </AlertText>
        </Alert>
      </View>
    </View>
  );
}
