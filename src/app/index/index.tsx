import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { useFonts } from "expo-font";

export default function Index() {
  const [loaded, error] = useFonts({
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontSize: 25,
        }}
      >
        TESTE TSX
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  robotoTitle: {},
});
