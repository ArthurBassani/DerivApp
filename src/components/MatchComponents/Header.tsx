import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Menu, Provider as PaperProvider } from 'react-native-paper';
import {router} from "expo-router";
import ExitButton from "@/src/components/MatchComponents/ExitButton";
// É necessário add validação para a saída da partida
const MatchHeader: React.FC = () => {
      return(
        <PaperProvider>
            <View style={styles.header}>
            <ExitButton name= "sair" onPress={() => router.navigate("/unidade/unidade")} style={styles.icon}/>
            <Image source={require('@/assets/images/serelepe_principal.png')} style={styles.icon}/>
            <Image source={require('@/assets/images/icons/star.png')} style={styles.icon} />
            </View>
        </PaperProvider>
      )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MatchHeader;