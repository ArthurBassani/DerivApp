import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import DerivativeButton from "@/src/components/DerivativeButton/derivativeButton";
import { derivatives } from "@/src/components/DerivativeButton/derivativeTypes";
import { router} from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={derivatives}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <DerivativeButton name={item.name} onPress={() => router.navigate("/Unidade/unidade")} />
                )}
                contentContainerStyle={styles.listContainer}
            />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7DDED",
    },
    listContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
