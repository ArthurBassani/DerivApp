import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { OnBording } from "../onBording/onBording";
import { useFonts } from "expo-font";
import { colors } from "@/src/styles/colors";
export default function Index() {
  const [loaded, error] = useFonts({
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      <OnBording></OnBording>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  robotoTitle: {},
});
