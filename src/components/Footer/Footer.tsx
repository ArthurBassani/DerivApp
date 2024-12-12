import { View, StyleSheet, Image } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Image source={{ }} style={styles.icon} /> //Onde eu pego os icones???
      <Image source={{ }} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
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
});

export default Footer;