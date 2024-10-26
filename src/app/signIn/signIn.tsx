import { Button } from "@/src/components/button/button";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@/src/components/input/input";
import { colors } from "@/src/styles/colors";
import React, { useState } from "react";

export default function SignIn() {
  //Arthur
  const [date, setDate] = useState("");
  const handleDateChange = (text: string) => {
    let cleaned = text.replace(/[^0-9]/g, "");
    if (cleaned.length > 2 && cleaned.length <= 4) {
      cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    } else if (cleaned.length > 4) {
      cleaned =
        cleaned.slice(0, 2) +
        "/" +
        cleaned.slice(2, 4) +
        "/" +
        cleaned.slice(4, 8);
    }

    setDate(cleaned);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Nome de Usuário"></Input>
        <Input
          value={date}
          onChangeText={handleDateChange}
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
          maxLength={10}
        ></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
        <Button title="Criar Conta" color={colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grayBg,
  },
  form: {
    gap: 24,
    flex: 1,
    padding: 24,
    width: "85%",
    maxHeight: 664,
    alignContent: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
