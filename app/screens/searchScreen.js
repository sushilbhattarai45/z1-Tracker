import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import NavBar from "../../components/other/navBar";
import SearchBar from "../../components/other/searchBar";
import VehicleDataBigBox from "../../components/vehicleData/vehicleDataBigBox";
import VehicleDataSmallBox from "../../components/vehicleData/vehicleDataSmallBox";
import colors from "../../components/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
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

      <View
        style={{
          marginHorizontal: 8,
          marginTop: 20,
          marginBottom: 8,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: colors.purple,
              borderRadius: 10,
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
              flexDirection: "row",
              display: "flex",

              height: 40,
              width: "auto",
            }}
          >
            <View
              style={{
                marginLeft: 4,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="timer-outline" size={16} color={colors.purple} />
              {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
            </View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: colors.white,
              }}
            >
              All
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 8,
              backgroundColor: colors.boxGrey,
              borderRadius: 10,
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
              flexDirection: "row",
              display: "flex",

              height: 40,
              width: "auto",
            }}
          >
            <View
              style={{
                marginLeft: 4,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignSelf: "flex-end",
                  backgroundColor: colors.green,
                }}
              ></View>
              {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
            </View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: colors.black,
              }}
            >
              Online
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              backgroundColor: colors.boxGrey,
              borderRadius: 10,
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
              flexDirection: "row",
              display: "flex",

              height: 40,
              width: "auto",
            }}
          >
            <View
              style={{
                marginLeft: 4,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignSelf: "flex-end",
                  backgroundColor: colors.orange,
                }}
              ></View>
              {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
            </View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: colors.black,
              }}
            >
              Offline
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              backgroundColor: colors.boxGrey,
              borderRadius: 10,
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
              flexDirection: "row",
              display: "flex",

              height: 40,
              width: "auto",
            }}
          >
            <View
              style={{
                marginLeft: 4,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignSelf: "flex-end",
                  backgroundColor: colors.blue,
                }}
              ></View>
              {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
            </View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: colors.black,
              }}
            >
              Unknown
            </Text>
          </View>
        </ScrollView>
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
