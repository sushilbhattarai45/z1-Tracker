import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { SvgUri } from "react-native-svg";

import Colors from "../../../components/colors";
import VehicleDataSmallBox from "../../../components/vehicleData/vehicleDataSmallBox";
import VehicleDataBigBox from "../../../components/vehicleData/vehicleDataBigBox";
import NavBar from "../../../components/other/navBar";
import SearchBar from "../../../components/other/searchBar";
export default function LoginPage() {
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
      }}
    >
      <NavBar />

      <SearchBar />
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          alignContent: "center",
          alignSelf: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
            flex: 1,
            margin: 8,
          }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <SvgUri
                width={120}
                height={120}
                uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
              />
              {/* <LoginSvg height={100} width={100} /> */}
              {/* <SvgUri width="200" height="200" svgXmlData={loginSvg} /> */}
              {/* <Image
                source={require("../../../assets/img.svg")}
                style={{ width: 100, height: 100 }}
              /> */}

              <Text
                style={{
                  color: Colors.black,
                  fontWeight: "bold",
                  marginTop: 16,
                  fontSize: 24,

                  alignSelf: "center",
                }}
              >
                Z1 Tracker
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.purple,
                  fontWeight: "bold",
                  marginTop: 30,
                  fontSize: 20,
                  width: "90%",
                  alignSelf: "left",
                }}
              >
                Login{" "}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  width: "90%",
                  color: Colors.purple,
                  fontWeight: "bold",
                  marginBottom: 5,
                  fontSize: 14,
                }}
              >
                Username
              </Text>
              <TextInput
                style={{
                  width: "90%",
                  height: 60,
                  borderRadius: 5,
                  borderColor: "gray",
                  borderWidth: 1,
                  padding: 10,
                  color: Colors.white,
                  backgroundColor: Colors.black,
                }}
                placeholderTextColor={Colors.white}
                placeholder="Username"
              />
            </View>

            <View
              style={{
                marginTop: 20,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  width: "90%",
                  color: Colors.purple,
                  fontWeight: "bold",
                  marginBottom: 5,
                  fontSize: 14,
                  alignSelf: "left",
                }}
              >
                Password
              </Text>
              <TextInput
                style={{
                  width: "90%",
                  height: 60,
                  borderRadius: 5,
                  borderColor: "gray",
                  borderWidth: 1,
                  padding: 10,
                  color: Colors.white,
                  backgroundColor: Colors.black,
                }}
                placeholderTextColor={Colors.white}
                placeholder="Password"
              />
            </View>
            <View
              style={{
                marginTop: 20,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  console.log("Login Button Pressed");
                }}
                style={{
                  width: "90%",
                  height: 60,
                  borderRadius: 5,
                  borderColor: "gray",
                  borderWidth: 1,
                  padding: 10,
                  color: Colors.white,
                  backgroundColor: Colors.purple,
                  alignItems: "center",

                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontSize: 18,

                    alignSelf: "center",
                  }}
                >
                  Login{" "}
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 20,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: Colors.grey, fontSize: 14 }}>
                By Doing This, you agree to our
              </Text>
              <Text
                style={{
                  color: Colors.purple,
                  textDecorationLine: "underline",
                  fontSize: 14,
                }}
              >
                Terms and Conditions
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <VehicleDataBigBox />
        </View>
      </ScrollView>
    </View>
  );
}
