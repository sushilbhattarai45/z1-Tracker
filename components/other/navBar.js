import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function NavBar() {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <Text
        style={{
          marginLeft: 16,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Map Screen
      </Text>
    </View>
  );
}
