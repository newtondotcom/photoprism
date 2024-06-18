import { Button, TextInput, View ,ActivityIndicator } from "react-native";
import {getToken} from '@/src/photoprism';

export default function Auth() {

    const [host, setHost] = useState('');
    const [port, setPort] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(false);

    async function connect() {
        setLoading(true);
        const token = await getToken();
        setLoading(false);
    }

    if (!connected) {
        return (
            <View>
                <TextInput placeholder="Endpoint" onChangeText={setHost} value={host}/>
                <TextInput placeholder="Port" onChangeText={setPort} value={port}/>
                <TextInput placeholder="Username" onChangeText={setUsername} value={username}/>
                <TextInput placeholder="Password" onChangeText={setPassword} value={password}/>
                {loading && <ActivityIndicator size="small" color="#0000ff" />}
                {!loading && <Button onPress={connect} title="Connect" />}
            </View>
        );
    } else {
        return (
            <View>
                <Text>You are connected to Photoprism</Text>
            </View>
        );
    }
}