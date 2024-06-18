import { Button, TextInput, View, ActivityIndicator } from "react-native";
import { getToken } from "@/src/photoprism";
import { save, getValueFor } from "@/src/store";
import { useState } from "react";

export default function Auth() {
  const [host, setHost] = useState("http://10.0.2.2");
  const [port, setPort] = useState("2342");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("insecure");
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  async function connect() {
    setLoading(true);
    await save("endpoint", host + ":" + port);
    await save("username", username);
    await save("password", password);
    const result = await getToken();
    if (result == "ok") {
      setConnected(true);
    }
    setLoading(false);
  }

  if (!connected) {
    return (
      <View>
        <TextInput placeholder="Endpoint" onChangeText={setHost} value={host} />
        <TextInput placeholder="Port" onChangeText={setPort} value={port} />
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
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
