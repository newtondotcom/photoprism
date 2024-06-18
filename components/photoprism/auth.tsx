import { Button, TextInput, View } from "react-native";
import {getToken} from '@/src/photoprism';

export default function Auth() {

    const [host, setHost] = useState('');
    const [port, setPort] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);

    async function connect() {
        const token = await getToken();
    }

    if (state) { 
        return (
            <View>
                <TextInput placeholder="Endpoint" value={host}/>
                <TextInput placeholder="Port" value={port}/>
                <TextInput placeholder="Username" value={username}/>
                <TextInput placeholder="Password" value={password}/>
                // SSL IS FALSE by default
                <Button title="Connect" onClick={connect} />
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