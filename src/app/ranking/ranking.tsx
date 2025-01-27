import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { View, Text, StyleSheet } from "react-native";

export default function ranking(){
    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Ranking indiponível!</Text>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E7DDED",
    },
    text: {
      fontSize: 18,
      flex: 7,
      textAlignVertical: "center",
      textAlign: 'center',
      fontWeight: "bold",
      color: 'white',
    },
  });

