import { StyleSheet, TextInputProps } from "react-native";
import { colors } from "@/src/styles/colors";
import { TextInput } from "react-native";
import React from "react";

export function Input({ ...rest }: TextInputProps) {
  //Arthur
  return (
    <TextInput
      style={styles.container}
      {...rest}
      placeholderTextColor={"gray"}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.grayBg,
    height: 52,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 16,
    color: "black",
  },
});
