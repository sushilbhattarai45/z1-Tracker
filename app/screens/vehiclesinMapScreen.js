import React from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import NavBar from "../../components/other/navBar";
import MapView, { Polyline } from "react-native-maps";
import { Marker } from "react-native-maps";
import VehicleDataSmallBox from "../../components/vehicleData/vehicleDataSmallBox";
import VehicleDataBigBox from "../../components/vehicleData/vehicleDataBigBox";
export default function InfoPage() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <View
          style={{
            position: "absolute",
            zIndex: 1,
          }}
        >
          <NavBar />
        </View>
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
          initialRegion={{
            latitude: 27.6955069,
            longitude: 83.465123,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* <Polyline
            coordinates={[
              { latitude: 27.6955069, longitude: 83.465123 },
              { latitude: 27.68274, longitude: 83.461124 },

              { latitude: 27.674301, longitude: 83.462829 },

              { latitude: 27.678996, longitude: 83.459547 },
            ]}
            strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["red", "green", "blue"]}
            strokeWidth={6}
          /> */}

          <Marker
            title="Vehicle 1"
            coordinate={{ latitude: 27.657136, longitude: 83.437808 }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                }}
              >
                Sushil's Bmw
              </Text>
            </View>

            <Image
              source={require("../../assets/car.png")}
              style={{
                resizeMode: "contain", // Prevent cropping
                height: 30,
                width: 30,
              }}
            />
          </Marker>
          <Marker
            title="Vehicle 1"
            coordinate={{ latitude: 27.68274, longitude: 83.461124 }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                }}
              >
                Pujan's Audi
              </Text>
            </View>

            <Image
              source={require("../../assets/car.png")}
              style={{
                resizeMode: "contain", // Prevent cropping
                height: 30,
                width: 30,
              }}
            />
          </Marker>
          <Marker
            title="Vehicle 1"
            coordinate={{ latitude: 27.674301, longitude: 83.462829 }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                }}
              >
                Rajesh's Discover{" "}
              </Text>
            </View>

            <Image
              source={require("../../assets/car.png")}
              style={{
                resizeMode: "contain", // Prevent cropping
                height: 30,
                width: 30,
              }}
            />
          </Marker>
        </MapView>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            position: "absolute",
            bottom: 20,
          }}
        >
          <View
            style={{
              width: Dimensions.get("window").width - 50,
              marginHorizontal: 4,
            }}
          >
            <VehicleDataBigBox />
          </View>
          <View
            style={{
              width: Dimensions.get("window").width - 50,
              marginHorizontal: 4,
            }}
          >
            <VehicleDataBigBox />
          </View>
          <View
            style={{
              width: Dimensions.get("window").width - 50,
              marginHorizontal: 4,
            }}
          >
            <VehicleDataBigBox />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
