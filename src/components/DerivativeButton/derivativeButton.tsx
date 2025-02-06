import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Unidade from "@/src/components/Unidade/Unidade";
import { styles } from "./styles";
type derivativeButtonProps = {
    name: string;
};

export default function DerivativeButton({ name }: derivativeButtonProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
}
