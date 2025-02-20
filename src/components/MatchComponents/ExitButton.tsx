import { FlatList, Text, View, StyleSheet,TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { router} from "expo-router";
// o ExitButton não renderiza, mas ele está lá fazendo a navegação
type exitButtonProps = TouchableOpacityProps & {
    name: string;
};

export default function ExitButton({
    name,
    ...rest
}: exitButtonProps) {
    return (
        <TouchableOpacity style={styles.card} {...rest} activeOpacity={0.7}>
            <Text style={styles.cardText}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        //flex: 1,
        width: '48%',
        aspectRatio: '1',
        margin: 15,
        height: 90, // bolinha
        maxWidth: '25%', // bolinha
        backgroundColor: '#114EA8',
        borderRadius: 1000, // bolinha
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText:{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})