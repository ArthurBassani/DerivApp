import {  Text, View, StyleSheet } from "react-native";
import React from "react";

type questionCardProps = {
    question: string,
}

export default function QuestionCard({question}:questionCardProps){
    return(
        <View style = {styles.card}>
            <Text style={styles.cardText}>{question}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        card:{
            height: 50 ,
            borderWidth: 1 , 
            backgroundColor: "#FFF",
            shadowColor: "#000", // Sombra para efeito elevado
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3, // Sombra para Android
        },
        cardText:{
            fontSize: 24,
            fontWeight: "bold",
            color: "#000",
        },
    }
)