import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, blue, red, green, purple } from "../utils/colors";
import ActionButton from "./ActionButton";

export default function Card({ display, card, onFlip, onCorrectAnswer, onIncorrectAnswer }) {
    const { question, answer } = card;
    if (display === "question") {
      return (
        <View style={styles.card}>
          <Text style={styles.text}>{question}</Text>
          <ActionButton
            text="Show Answer"
            onPress={onFlip}
            backgroundColor={white}
            textColor={red}
          />
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.card}>
            <Text style={styles.text}>{answer}</Text>
            <ActionButton
              text="Show Question"
              onPress={onFlip}
              backgroundColor={white}
              textColor={red}
            />
          </View>
          <ActionButton
            text="Correct"
            backgroundColor={green}
            onPress={onCorrectAnswer}
          />
          <ActionButton
            text="Incorrect"
            backgroundColor={red}
            onPress={onIncorrectAnswer}
          />
        </View>
      );
    }
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
