import { Button}  from "@/src/components/Button/Button";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@/src/components/input/input";
import { colors } from "@/src/styles/colors";
import React, { useState } from "react";
import { router } from "expo-router";

//Arthur
export default function LogIn() {
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
          <Text style={styles.pageTitle}>LOGIN</Text>
        </View>
        <Input
          placeholder="Nome de Usuário"
          value={userName}
          onChangeText={setUserName}
        ></Input>
        <Input placeholder="Senha"></Input>
        <View style={styles.buttons}>
          <Button
            title="Entrar Conta"
            color="white"
            onPress={() => router.navigate("/homeScreen/homeScreen")}
          />
          <Button
            title="Já Tenho Uma Conta"
            color="white"
            onPress={() => router.navigate("/signIn/signIn")}
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
