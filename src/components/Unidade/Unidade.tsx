import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const data = [
    {id: "1", label: "?"},
    {id: "2", label: "?"},
    {id: "3", label: "?"},
    {id: "4", label: "?"},
    {id: "5", label: "?"},
    {id: "6", label: "?"},
]
    
export default function Unidade(){
     const renderItem = ({item}: {item:{id: string; label: string}}) => (
        <TouchableOpacity style={styles.card}>
           <Text style={styles.cardText}>
            {item.label}
           </Text>
        </TouchableOpacity>
     );

     return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={1}
                contentContainerStyle={styles.listContent}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: '100%',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'column',
        alignItems: 'center',
    },
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