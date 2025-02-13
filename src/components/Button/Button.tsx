import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    TextProps,
} from "react-native";
import React from "react";
import { colors } from "@/src/styles/colors";
import { StyleProp } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    color?: string;
    backgroundColor?: string;
};

export function Button({
    title,
    color,
    backgroundColor,
    ...rest
}: ButtonProps) {
    return (
        //Arthur
        <TouchableOpacity
            style={[
                styles.container,
                backgroundColor ? { backgroundColor } : null,
            ]}
            {...rest}
            activeOpacity={0.7}
        >
            <Text style={[styles.title, color ? { color } : null]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primaryYellow,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.white,
    },
});
