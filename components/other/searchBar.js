import React from "react";
import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function SearchBar() {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: colors.boxGrey,
        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder="Search"
        style={{
          width: "85%",
          height: 60,
          fontSize: 18,
          backgroundColor: colors.boxGrey,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          color: colors.black,
          padding: 12,
        }}
      />
      <View
        style={{
          width: "15%",
          height: 60,
          backgroundColor: colors.purple,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: colors.purple,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={24} color={colors.white} />
          {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
        </View>
      </View>
    </View>
  );
}
