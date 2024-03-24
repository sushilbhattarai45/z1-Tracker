import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import NavBar from "../../components/other/navBar";
import MapView, { Polyline } from "react-native-maps";
import { Marker } from "react-native-maps";
import VehicleDataSmallBox from "../../components/vehicleData/vehicleDataSmallBox";
import VehicleDataBigBox from "../../components/vehicleData/vehicleDataBigBox";
export default function InfoPage() {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    // const login = async () => {
    //   const payload = {
    //     email: "demo",
    //     password: "demo",
    //   };

    //   let cookie = null;
    //   axios
    //     .post("http://103.90.86.173:8082/api/session", payload, {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       },
    //     })
    //     .then((response) => {
    //       cookie = response.headers["set-cookie"][0];
    //       console.log(cookie);
    //       // getDevices(cookie);
    //     })

    //     .catch((error) => {
    //       console.error("Error Hello:", error);
    //     });
    // };
    async function getDevices(data) {
      axios
        .get("http://103.90.86.173:8082/api/positions", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Cookie: "JSESSIONID=node01lo9v7wrooga5mzfm887b2ffj68.node0; Path=/",
          },
        })
        .then((response) => {
          setPosition(response.data);
        });
    }

    getDevices();
  }, []);

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
          <Polyline
            coordinates={[
              { latitude: 27.6955069, longitude: 83.465123 },
              { latitude: 27.68274, longitude: 83.461124 },

              { latitude: 27.674301, longitude: 83.462829 },

              { latitude: 27.678996, longitude: 83.459547 },
            ]}
            strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["red", "green", "blue"]}
            strokeWidth={6}
          />
          {position.map((item, index) => {
            return (
              <Marker
                key={index}
                title="Vehicle 1"
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}
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
                    {item.deviceId}
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
            );
          })}

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
