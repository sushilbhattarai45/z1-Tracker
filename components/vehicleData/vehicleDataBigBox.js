import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import colors from "../colors";
import { Feather } from "@expo/vector-icons";
export default function VehicleDataBigBox() {
  return (
    <View>
      <Pressable
        style={{
          width: "90%",
          alignSelf: "center",
          //   height: 200,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: colors.black,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            padding: 10,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 0.5,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",

              alignItems: "center",
              // backgroundColor: colors.purple,
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                Sushil's BMW
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    // fontWeight: "bold",
                    color: colors.white,
                  }}
                >
                  Lu 45 Pa 4558{" "}
                </Text>

                <Text
                  style={{
                    marginLeft: 12,
                    fontSize: 12,
                    // fontWeight: "bold",
                    color: colors.white,
                  }}
                >
                  Moving{" "}
                </Text>
                <View
                  style={{
                    marginLeft: 4,
                    width: 16,
                    height: 16,
                    borderRadius: 12,
                    backgroundColor: colors.purple,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather name="arrow-up" size={16} color={colors.white} />
                </View>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignSelf: "flex-end",
                  backgroundColor: colors.green,
                }}
              ></View>
            </View>
          </View>
          <View style={{ flex: 0.2, marginTop: 10 }}>
            <View
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginLeft: 4,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: colors.purple,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="timer-outline" size={16} color={colors.white} />
                {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  // fontWeight: "bold",
                  color: colors.white,
                }}
              >
                Last Updated: {Date.now()}{" "}
              </Text>
            </View>
          </View>

          <View style={{ flex: 0.2, marginTop: 5 }}>
            <View
              style={{
                display: "flex",
                // justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginLeft: 4,
                  width: 20,
                  height: 20,
                  borderRadius: 12,
                  backgroundColor: colors.purple,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <EvilIcons
                  name="location"
                  size={16}
                  style={{
                    alignSelf: "center",
                    marginBottom: 1,
                  }}
                  color={colors.white}
                />
                {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  // fontWeight: "bold",
                  color: colors.white,
                }}
              >
                Siddharthanagar, Lumbini Province NP
              </Text>
            </View>
          </View>

          <View style={{ flex: 0.2, marginTop: 15 }}>
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    width: 100,
                    height: 50,
                    borderWidth: 1,
                    borderColor: colors.white,
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingTop: 2,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          marginLeft: 4,
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          backgroundColor: colors.purple,
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="timer-outline"
                          size={16}
                          color={colors.white}
                        />
                        {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                      </View>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: colors.white,
                        }}
                      >
                        Distance
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: colors.white,
                      alignSelf: "flex-start",
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      fontWeight: "bold",
                    }}
                  >
                    10 Km{" "}
                    {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 5,
                    borderRadius: 5,
                    width: 100,
                    height: 50,
                    borderWidth: 1,
                    borderColor: colors.white,
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingTop: 2,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          marginLeft: 4,
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          backgroundColor: colors.purple,
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="timer-outline"
                          size={16}
                          color={colors.white}
                        />
                        {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                      </View>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: colors.white,
                        }}
                      >
                        Speed
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: colors.white,
                      alignSelf: "flex-start",
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      fontWeight: "bold",
                    }}
                  >
                    20 Km/Hr{" "}
                    {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 5,
                    width: 100,
                    height: 50,
                    borderWidth: 1,
                    borderColor: colors.white,
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingTop: 2,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          marginLeft: 4,
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          backgroundColor: colors.purple,
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="timer-outline"
                          size={16}
                          color={colors.white}
                        />
                        {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                      </View>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: colors.white,
                        }}
                      >
                        Distance
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: colors.white,
                      alignSelf: "flex-start",
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      fontWeight: "bold",
                    }}
                  >
                    10 Km/Hr{" "}
                    {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
