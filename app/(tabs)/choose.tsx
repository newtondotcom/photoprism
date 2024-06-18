import ChooseAlbum from "@/components/photoprism/chooseAlbum";
import {
  Heading,
  View 
} from '@gluestack-ui/themed';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Heading>Choose an album</Heading>
      <ChooseAlbum />;
    </View>
  )
}