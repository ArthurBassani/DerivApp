import {
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from "react-native";
import React from "react";

type derivativeButtonProps = TouchableOpacityProps & {
    name: string;
};

export default function DerivativeButton({
    name,
    ...rest
}: derivativeButtonProps) {
    return (
        <TouchableOpacity style={styles.card} {...rest} activeOpacity={0.7}>
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
