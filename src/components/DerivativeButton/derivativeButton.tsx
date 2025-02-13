import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {} from "react-native";
type derivativeButtonProps = {
    name: string;
};

export default function DerivativeButton({ name }: derivativeButtonProps) {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "45%",
        height: 150,
        margin: 5,
        backgroundColor: "#114EA8",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
});
