import React from "react";
import {  SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";

const RecipeDetails = ({ route }) => {
  const { item } = route.params || {};
  const instructions = item.instructions || [];
  console.log (' item.nutrition :>> item.nutrition ');
  const nutrition = item.nutrition;
  const nutritionKeys = Object.keys(nutrition || {});
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Image style={styles.image} source={{ uri: item.thumbnail_url }} />
            <Title style={{ marginBotton:32 }} text={item.name}/>

            {nutritionKeys.map(key => (
              <View key={key} style={styles.row}>
                  <Text style={styles.key}>{key}</Text>
                  <Text style={styles.value}>{nutrition[key]}</Text>
              </View>
          ))}


          <Title style={{ marginTop: 32, marginBottom: 16 }} text="Instructions" />

          {instructions.map((instruction, index) => (
            <View key={instruction.id} style={styles.instructionRow}>
                <Text style={styles.index}>{index + 1}</Text>
                <Text style={styles.instructionText}>{instruction.display_text}</Text>
            </View>
        ))}

          </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(RecipeDetails);