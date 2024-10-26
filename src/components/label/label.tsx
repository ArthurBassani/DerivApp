import { View, Text, StyleSheet } from "react-native";
import React from "react";

type LabelProps = {
  title: string;
};
export function Label({ title }: LabelProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
