import { FlatList, Text, View, StyleSheet,TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { router} from "expo-router";

type answerButtonProps = TouchableOpacityProps & {
    answer: string;
    onPress: () => void;
    selected: boolean;
};

export default function AnswerButton({ answer, onPress, selected }: answerButtonProps) {
    return (
      <TouchableOpacity
        style={[styles.card, selected && styles.selectedCard]} 
        onPress={onPress}
      >
        <Text style={[styles.cardText, selected && styles.selectedText]}>{answer}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create(
    {
        selectedCard:{
            flexDirection: "row", // Para alinhar o texto e o ícone na horizontal
            alignItems: "center", // Centraliza os itens verticalmente
            justifyContent: "space-between", // Separa o texto e o ícone
            backgroundColor: "#4CAF50", // Fundo branco do card
            paddingVertical: 12, // Espaçamento interno
            paddingHorizontal: 16, // Espaçamento interno lateral
            borderRadius: 10, // Bordas arredondadas
            marginVertical: 8, // Espaço entre os cards
            shadowColor: "#000", // Sombra para efeito elevado
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3, // Sombra para Android
        },
        card:{
            flexDirection: "row", // Para alinhar o texto e o ícone na horizontal
            alignItems: "center", // Centraliza os itens verticalmente
            justifyContent: "space-between", // Separa o texto e o ícone
            backgroundColor: "#FFF", // Fundo branco do card
            paddingVertical: 12, // Espaçamento interno
            paddingHorizontal: 16, // Espaçamento interno lateral
            borderRadius: 10, // Bordas arredondadas
            marginVertical: 8, // Espaço entre os cards
            shadowColor: "#000", // Sombra para efeito elevado
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3, // Sombra para Android
        },
        cardText:{
            fontSize: 16,
            fontWeight: "bold",
            color: "#000",
        },
        selectedText:{
            fontSize: 16,
            fontWeight: "bold",
            color: "#FFF",
        },
    }
)