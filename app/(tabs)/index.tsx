import Auth from "@/components/photoprism/auth";
import { Heading, View } from "@gluestack-ui/themed";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Heading>Connect to your server</Heading>
      <Auth />
    </View>
  );
}
