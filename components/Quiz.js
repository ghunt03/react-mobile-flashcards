import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { white, blue, red, green, purple } from "../utils/colors";

import ActionButton from "./ActionButton";
import ScoreBoard from "./ScoreBoard";
import Card from "./Card";
import QuizCompletion from "./QuizCompletion";
class Quiz extends Component {
  constructor(props) {
    super(props);
    const { deckId } = this.props;
    this.state = { deckId, score: 0, cardIndex: 0, display: "question" };
  }

  restartQuiz = () => {
    this.setState({ score: 0, cardIndex: 0, display: "question" });
  };

  backToDeck = () => {
    const { deckId } = this.props;
    this.props.navigation.navigate("DeckView", { deckId });
  };

  flipCard = () => {
    this.setState({
      display: this.state.display === "answer" ? "question" : "answer"
    });
  };

  incorrectAnswer = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1, display: "question" });
  };

  correctAnswer = () => {
    this.setState({
      cardIndex: this.state.cardIndex + 1,
      score: this.state.score + 1,
      display: "question"
    });
  };

  render() {
    const { deck, deckId } = this.props;
    const { questions } = deck;
    const { score, cardIndex, display } = this.state;

    return (
      <View style={styles.container}>
        <ScoreBoard score={score} cardCount={questions.length} />
        {cardIndex < questions.length ? (
          <Card
            display={display}
            card={questions[cardIndex]}
            onFlip={this.flipCard}
            onCorrectAnswer={this.correctAnswer}
            onIncorrectAnswer={this.incorrectAnswer}
          />
        ) : (
          <QuizCompletion
            onBackToDeck={this.backToDeck}
            onRestartQuiz={this.restartQuiz}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    margin: 15,
    padding: 10
  },
  text: {
    fontSize: 30,
    paddingBottom: 20
  }
});

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deck: state[deckId]
  };
};

export default connect(mapStateToProps)(Quiz);
