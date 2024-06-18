import { Button, TextInput, View } from "react-native";
import * as SecureStore from 'expo-secure-store';


async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
}

export default function Auth() {

    const [text, setText] = useState('');
    const [port, setPort] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View>
            <TextInput placeholder="Endpoint" value={text}/>
            <TextInput placeholder="Port" value={port}/>
            <TextInput placeholder="Username" value={username}/>
            <TextInput placeholder="Password" value={username}/>
            // SSL IS FALSE
            <Button title="Connect" />

        </View> 
    );
}