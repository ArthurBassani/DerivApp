import {FlatList, Text, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import MatchHeader from "@/src/components/MatchComponents/Header";
import MatchFooter from "@/src/components/MatchComponents/Footer";
import AnswerButton from "@/src/components/MatchComponents/AnswerButton";
import QuestionCard from "@/src/components/MatchComponents/QuestionCard";
// acredito que para subir a FlatList de respostas eu deva colocar uma View no AnswerButton.tsx 
const answers = [
    { id: "1", name: "Resposta A" },
    { id: "2", name: "Resposta B" },
    { id: "3", name: "Resposta C" },
    { id: "4", name: "Resposta D" },
  ];// exemplo

  const question = "f(x) = 2x"; // exemplo
  
  export default function Match() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
    return (
      <View style={styles.container}>
        <MatchHeader />
  
        <QuestionCard question={question}/>
  
        <FlatList
          data={answers}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AnswerButton
              answer={item.name}
              onPress={() => setSelectedAnswer(item.id)}
              selected={selectedAnswer === item.id} // Prop para mudar a cor quando selecionado
              
            />
          )}
          contentContainerStyle={styles.list}
        />
  
        <MatchFooter />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7DDED",
    },
    text: {
        fontSize: 18,
      flex: 1,
      //textAlignVertical: "center",
      textAlign: 'center',
      fontWeight: "bold",
      color: 'white',
    },
    list:{
        flex: 7,
    }, 
})