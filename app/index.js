import { Text } from "react-native";
import hitApi from "../components/hitApi";

import { Link } from "expo-router";

export default function Page() {
  hitApi();
  return <Link href="screens/infoScreen">Home page</Link>;
}
