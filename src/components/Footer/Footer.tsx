import { View, StyleSheet, Image } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('@/assets/images/icons/book.png')} style={styles.icon} /> 
      <Image source={require('@/assets/images/icons/flag.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
});

export default Footer;