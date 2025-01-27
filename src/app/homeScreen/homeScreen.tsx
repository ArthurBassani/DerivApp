import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const data = [
  { id: '1', title: 'DERIVADAS PRIMITIVAS' },
  { id: '2', title: 'DERIVADA DA SOMA' },
  { id: '3', title: 'DERIVADA DO PRODUTO' },
  { id: '4', title: 'DERIVADA DA DIVISÃO' },
  { id: '5', title: 'DERIVADA DA COMPOSIÇÃO' },
  { id: '6', title: 'DERIVADA' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
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
    backgroundColor: '#E7DDED',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: { 
    width: '45%',
    height: 150, 
    margin: 5, 
    backgroundColor: '#114EA8',
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: { 
    color: 'white', 
    textAlign: 'center', 
  },
});
