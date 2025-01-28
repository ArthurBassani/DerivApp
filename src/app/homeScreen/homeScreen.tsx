import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { Link, Href } from "expo-router";

interface DerivativeItem {
  id: string;
  title: string;
  route: Href<string>;
}

const data: DerivativeItem[] = [
  { 
    id: '1', 
    title: 'DERIVADAS PRIMITIVAS',
    route: '/unidades/primitivas' as Href<string>
  },
  { 
    id: '2', 
    title: 'DERIVADA DA SOMA',
    route: '/unidades/soma' as Href<string>
  },
  { 
    id: '3', 
    title: 'DERIVADA DO PRODUTO',
    route: '/unidades/produto' as Href<string>
  },
  { 
    id: '4', 
    title: 'DERIVADA DA DIVISÃO',
    route: '/unidades/divisao' as Href<string>
  },
  { 
    id: '5', 
    title: 'DERIVADA DA COMPOSIÇÃO',
    route: '/unidades/composicao' as Href<string>
  },
  { 
    id: '6', 
    title: 'DERIVADA',
    route: '/unidades/geral' as Href<string>
  },
];

export default function HomeScreen() {
  const renderCard = ({ item }: { item: DerivativeItem }) => (
    <Link href={item.route} style={styles.card}>
      <Text style={styles.text}>{item.title}</Text>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
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
