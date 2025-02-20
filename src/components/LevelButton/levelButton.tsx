import { FlatList, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type levelButtonProps = TouchableOpacityProps & {
    label: string;
};

export default function LevelButton({label, ... rest}: levelButtonProps){
           return(
            <TouchableOpacity style={styles.card} {...rest} activeOpacity={0.7}>
                       <Text style={styles.cardText}>{label}</Text>
            </TouchableOpacity>

)
}

const styles = StyleSheet.create({
    card:{
        //flex: 1,
        width: '48%',
        aspectRatio: '1',
        margin: 15,
        height: 90, // bolinha
        maxWidth: '25%', // bolinha
        backgroundColor: '#114EA8',
        borderRadius: 1000, // bolinha
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText:{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})