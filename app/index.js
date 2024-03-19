import { Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Marker } from "react-native-maps";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          // image={{ uri: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fnRUCA0fjEb3kuIaTGogL7425IC.jpg"}}
        />
        <Marker
          coordinate={{ latitude: 27.657136, longitude: 83.437808 }}
          // image={{ uri: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fnRUCA0fjEb3kuIaTGogL7425IC.jpg"}}
        />
      </MapView>
    </View>
  );
}
