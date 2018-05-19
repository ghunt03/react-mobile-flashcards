import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, blue, red, green, purple } from "../utils/colors";
import ActionButton from "./ActionButton";

export default function QuizCompletion({ onBackToDeck, onRestartQuiz }) {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          margin: 20
        }}
      >
        <Text style={styles.text}>
          You have completed the quiz. Would you like to:
        </Text>
      </View>
      <ActionButton
        text="Restart Quiz"
        backgroundColor={blue}
        onPress={onRestartQuiz}
      />
      <ActionButton
        text="Back to Deck"
        backgroundColor={purple}
        onPress={onBackToDeck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 20
  },
  text: {
    fontSize: 30,
    paddingBottom: 20
  }
});
