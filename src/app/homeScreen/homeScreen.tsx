import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text> HOME PAGE </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    alignItems: "center",
    justifyContent: "center",
  },
});
