import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text> TELA DE LOGIN </Text>
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
