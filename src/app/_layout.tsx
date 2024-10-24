import { Stack } from "expo-router";
import { colors } from "../styles/colors";
import React from "react";

export default function RootLayout() {
  const backgroundColor = colors.color4;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    >
      <Stack.Screen name="index/index" />
    </Stack>
  );
}
