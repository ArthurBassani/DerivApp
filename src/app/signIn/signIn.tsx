import { Button } from "@/src/components/Button/Button";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@/src/components/input/input";
import { colors } from "@/src/styles/colors";
import { router } from "expo-router";
import React, { useState } from "react";

export default function SignIn() {
  //Arthur
  //#region DataState
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
  //#endregion
  //#region UserNameState
  const [userName, setUserName] = useState("");
  //#endregion
  //#region EmailState
  const [emailState, setEmail] = useState("@");
  let emailPattern = false;
  function verifyEmail(email: string) {
    setEmail(email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailPattern = regex.test(email);
  }
  //#endregion
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>CRIE SUA CONTA</Text>
        </View>
        <Input
          placeholder="Nome de Usuário"
          value={userName}
          onChangeText={setUserName}
        ></Input>
        <Input
          value={date}
          onChangeText={handleDateChange}
          placeholder="Data de Nascimento"
          keyboardType="numeric"
          maxLength={10}
        ></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
        <View style={styles.buttons}>
          <Button
            title="Criar conta"
            color={colors.white}
            onPress={() => router.navigate("/homeScreen/homeScreen")}
          />
          <Button
            title="Já tenho uma conta"
            color={colors.white}
            onPress={() => router.navigate("/logIn/logIn")}
          />
        </View>
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
    backgroundColor: colors.purpleBg,
  },
  form: {
    gap: 24,
    flex: 1,
    padding: 24,
    marginBottom: 0,
    width: "83%",
    maxHeight: "83%",
    alignContent: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 8,
  },
  pageTitleContainer: {},
  pageTitle: {
    textAlign: "center",
    fontSize: 24,
    color: colors.primaryYellow,
    fontWeight: "bold",
  },
  buttons: {
    gap: 12,
    marginBottom: 12,
  },
});
