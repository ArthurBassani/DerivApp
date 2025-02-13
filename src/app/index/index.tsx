import  homeScreen  from "../homeScreen/homeScreen";
import { OnBording } from "../onBording/onBording";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

export default function Index() {
  const [loaded, error] = useFonts({
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* <FontAwesome name="flag-checkered" size={24} color="black" /> */}
      <OnBording></OnBording>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
