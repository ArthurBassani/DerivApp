import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Menu, Provider as PaperProvider } from 'react-native-paper';


const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return(
    <PaperProvider>
        <View style={styles.header}>
            <Image 
            source={require('@/assets/images/serelepe/serelepe_principal.png')} 
            style={styles.icon}
            />
            <Text style={styles.score}>0</Text>
            <Menu 
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
                <TouchableOpacity onPress={openMenu} style={styles.userIcon} />
            }
            >
                <Menu.Item onPress={() => alert('Dados')} title="Dados" />
                <Menu.Item onPress={() => alert('Ver Conquistas')} title="Ver Conquistas" />
                <Menu.Item onPress={() => alert('Ver Estatísticas')} title="Ver Estatísticas" />
                <Menu.Item onPress={() => alert('Configurações')} title="Configurações" />
                <Menu.Item onPress={() => alert('Ajuda')} title="Ajuda" />
            </Menu>
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
  userIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
});

export default Header;