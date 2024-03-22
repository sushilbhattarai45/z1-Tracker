import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import NavBar from "../../components/other/navBar";
import SearchBar from "../../components/other/searchBar";
import VehicleDataBigBox from "../../components/vehicleData/vehicleDataBigBox";
import VehicleDataSmallBox from "../../components/vehicleData/vehicleDataSmallBox";

export default function SearchScreen() {
  return (
    <View
      style={{
        margin: 8,
        flex: 1,
      }}
    >
      <NavBar />
      <View
        style={{
          marginHorizontal: 8,
          marginTop: 20,
          marginBottom: 8,
        }}
      >
        <SearchBar />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 2,
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <VehicleDataSmallBox />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
