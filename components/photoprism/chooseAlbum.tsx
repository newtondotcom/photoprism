import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createAlbum, getAlbums } from '@/scripts/photoprism';
import { save, getValueFor } from "@/scripts/store";
import {
  Heading,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonIcon,
  Spinner,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  AddIcon
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { Album } from '@/scripts/types/photoprism';

export default function ChooseAlbum() {
  const router = useRouter();
  const [albums, setAlbums] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [albumsFetched, setAlbumsFetched] = useState(false);

  async function crAlbum() {
    setLoading(true);
    try {
      const newAlbum : Album = await createAlbum(name);
      if (newAlbum) {
        await save("album_id", newAlbum.UID);
        router.replace('/sync');
        setName('');
      }
    } catch (error) {
      console.error('Error creating album:', error);
    } finally {
      setLoading(false);
    }
  }

  function setChoiceEvent(value: string) {
    save("album_id", value);
    router.replace('/sync');
  }

  useEffect(() => {
    const fetchData = async () => {
      const albumId = await getValueFor("album_id");
      if (albumId !== null && albumId !== "") {
        console.log("Album ID found:", albumId);
        router.replace('/sync');
      } else {
      try {
        const albumsLocal : Array<Album> = await getAlbums();
        if (albumsL == null) {
          console.log("No albums found");
        } else {
          setAlbums(albumsLocal);
        }
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }
    setAlbumsFetched(true);
    setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Heading>Choose an album</Heading>
      {albumsFetched && albums.length !== 0 && (
        <View>
          <Select onValueChange={setChoiceEvent}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="Select option" />
              <SelectIcon mr="$3">
                <ChevronDownIcon />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {albums.map((album) => (
                  <SelectItem key={album.UID} label={album.Title} value={album.UID} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>
      )}
      {albumsFetched && albums.length === 0 && (
        <View>
          <Alert mx="$2.5" action="warning" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>
              It looks like you don't have any albums yet. Please create one.
            </AlertText>
          </Alert>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            onChangeText={setName}
            value={name}
          >
            <InputField placeholder="Enter Text here" />
          </Input>
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={loading}
            isFocusVisible={false}
            onPress={crAlbum}
          >
            <ButtonText>Create</ButtonText>
            <ButtonIcon as={AddIcon} />
            {loading && <Spinner />}
          </Button>
        </View>
      )}
      {!albumsFetched && (
        <View>
          <Spinner size="large" />
        </View>
      )}
    </View>
  );
}
