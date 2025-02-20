import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Unidade from "@/src/components/Unidade/Unidade";

export default function TelaUnidade() {
    

    return (
        <View style={styles.container}>
            <Header />
            <Unidade />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },title: {// seria para configurar o título da derivada 
        fontSize: 18,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },
}
)