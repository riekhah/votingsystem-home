import React from "react";
import { View, Text, Button } from "react-native";
import { TabScreenProps } from "../type";

export default function ProfileScreen({ navigation }: TabScreenProps<"Profile">) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
