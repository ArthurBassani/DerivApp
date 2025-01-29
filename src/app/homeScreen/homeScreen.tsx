import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import supabase from "@/src/services/supabase";

export default function HomeScreen() {
  const [Derivada, setDerivada] = useState<{ id: number; tipo: number; title?: string }[]>([]);

  const mapearTitulo = (tipo: number) => {
    const titulos: Record<number, string> = {
      1: "DERIVADAS PRIMITIVAS",
      2: "DERIVADAS DA SOMA",
      3: "DERIVADAS DO PRODUTO",
      4: "DERIVADAS DA DIVISÃO",
      5: "DERIVADAS DA COMPOSIÇÃO",
      6: "DERIVADAS SURPRESA",
    };
    return titulos[tipo] || "DERIVADAS SEM CLASSIFICAÇÃO";
  };

  useEffect(() => {
    const fetchDerivada = async () => {
      const { data, error } = await supabase.from("Derivada").select("id, tipo");

      if (error) {
        console.log("Erro ao buscar derivada", error.message);
      } else {
        const derivadasFormatadas = data.map((item: { id: number; tipo: number }) => ({
          ...item,
          title: mapearTitulo(item.tipo),
        }));

        console.log("Derivadas carregadas:", derivadasFormatadas);
        setDerivada(derivadasFormatadas);
      }
    };

    fetchDerivada();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={Derivada} //era data antes
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
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
