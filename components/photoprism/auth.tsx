import {
  Button,
  TextInput,
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { getToken } from "@/scripts/photoprism";
import { save, getValueFor } from "@/scripts/store";
import { router } from "expo-router";
import { useState } from "react";
import * as MediaLibrary from "expo-media-library";

export default function Auth() {
  // Android host : http://10.0.2.2
  const [host, setHost] = useState("http://192.168.1.45");
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
    if (result === "ok") {
      setConnected(true);
      await getPermission();
      console.log("Connected");
      router.push("/choose");
    } else {
      console.log(result);
    }
    setLoading(false);
  }

  async function getPermission() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }

  if (!connected) {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Endpoint"
          onChangeText={setHost}
          value={host}
          style={styles.input}
        />
        <TextInput
          placeholder="Port"
          onChangeText={setPort}
          value={port}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry
        />
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
        {!loading && <Button onPress={connect} title="Connect" />}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>You are connected to Photoprism</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "white",
  },
});
