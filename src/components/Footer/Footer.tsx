import { View, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Link href="/homeScreen/homeScreen" style={styles.link}>
         <Image 
            source={require('@/assets/images/icons/book.png')} 
            style={styles.icon} 
            />
      </Link>
       
      <Link href="/ranking/ranking" style={styles.link}>
          <Image 
             source={require('@/assets/images/icons/flag.png')} 
             style={styles.icon} 
          />
      </Link>
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
  link: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Footer;