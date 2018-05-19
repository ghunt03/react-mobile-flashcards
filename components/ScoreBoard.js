import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ScoreBoard({ score, cardCount }) {
  return (
    <View style={styles.score}>
      <Text style={styles.scoreText}>Score: </Text>
      <Text style={styles.scoreText}>
        {score} / {cardCount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    flexDirection: "row"
  },
  scoreText: {
    fontSize: 20
  }
});
