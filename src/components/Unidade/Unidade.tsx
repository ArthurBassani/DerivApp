import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {levels} from "@/src/components/LevelButton/levelTypes";
import LevelButton from "@/src/components/LevelButton/levelButton"
import { router} from "expo-router";
    
export default function Unidade(){
    
     return(
        <View style={styles.container}>
            <FlatList
                data={levels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                                <LevelButton label={item.label} onPress={() => router.navigate("../match/match")} />
                            )}
                numColumns={1}
                contentContainerStyle={styles.listContent}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: '100%',
        backgroundColor: "#E7DDED",
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'column',
        alignItems: 'center',
    },
})