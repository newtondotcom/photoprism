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
import { router } from 'expo-router';
import { Album } from '@/scripts/types/photoprism';

export default function ChooseAlbum() {
  const [albums, setAlbums] = useState([]);
  const [choice, setChoice] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [albumsFetched, setAlbumsFetched] = useState(false);
  const [alreadyChosen, setAlreadyChosen] = useState(false);

  async function crAlbum() {
    setLoading(true);
    try {
      const newAlbum : Album = await createAlbum({ title: name });
      if (newAlbum) {
        await save("album_id", newAlbum.UID);
        router.push('/sync');
        setName('');
      }
    } catch (error) {
      console.error('Error creating album:', error);
    } finally {
      setLoading(false);
    }
  }

  function setChoiceEvent(value: string) {
    setChoice(value);
    save("album_id", value);
    router.push('/sync');
  }

  useEffect(() => {
    async function fetchAlbums() {
      const albumId = await getValueFor("album_id");
      if (albumId !== null && albumId !== "") {
        console.log("Album ID found:", albumId);
        setAlreadyChosen(true);
      } else {
      setLoading(true);
      try {
        const albumsL : Array<Album> = await getAlbums();
        if (albumsL == null) {
          console.log("No albums found");
        }
        setAlbums(albumsL);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }
        setAlbumsFetched(true);
        setLoading(false);
    }
    fetchAlbums();
    if (alreadyChosen) {
      console.log("Album already chosen");
      router.push('/sync');
    } else {
      console.log("No album chosen");
    }
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
