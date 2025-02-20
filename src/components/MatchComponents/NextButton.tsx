import { FlatList, Text, View, StyleSheet,TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { router} from "expo-router";
// Basicamente não está sendo usado pq não aceita a imagem para fazer o route :/
type nextButtonProps = TouchableOpacityProps & {
    name: string;
};

export default function NextButton({
    name,
    ...rest
}: nextButtonProps) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.7}>
            <View>
            
            </View>
           
        </TouchableOpacity>
    );
}