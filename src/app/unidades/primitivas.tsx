import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Unidade from "@/src/components/Unidade/Unidade";
import {styles} from "./styles";

export default function Primitivas(){
    return (
        <View style= {styles.container}>
            <Header/>
            <Text style={styles.title}>Derivadas Primitivas</Text>
                <Unidade />
            <Footer/>
        </View>
    )
}

