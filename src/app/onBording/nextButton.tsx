import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

//Arthur
export function NextButton({ scrollTo }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.button}
        activeOpacity={0.6}
      >
        <AntDesign name="arrowright" size={32} color={"#fff"}></AntDesign>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: colors.primaryBlue,
    borderRadius: 100,
    padding: 10,
  },
});
