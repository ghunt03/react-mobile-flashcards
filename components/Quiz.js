import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white, blue, red, green, purple } from "../utils/colors";
import ActionButton from "./ActionButton";

class Quiz extends Component {
  constructor(props) {
    super(props);
    const { deckId } = this.props;
    this.state = { deckId, score: 0, cardIndex: 0, display: "question" };
  }

  flipCard = () => {
    this.setState({
      display: this.state.display === "answer" ? "question" : "answer"
    });
  };

  restartQuiz = () => {
    this.setState({ score: 0, cardIndex: 0, display: "question" });
  };

  returnToDeckList = () => {
    this.props.navigation.navigate("DeckList");
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

  renderQuestion = question => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{question}</Text>
        <ActionButton
          text="Show Answer"
          onPress={this.flipCard}
          backgroundColor={white}
          textColor={red}
        />
      </View>
    );
  };

  renderAnswer = answer => {
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.text}>{answer}</Text>
          <ActionButton
            text="Show Question"
            onPress={this.flipCard}
            backgroundColor={white}
            textColor={red}
          />
        </View>
        <ActionButton
          text="Correct"
          backgroundColor={green}
          onPress={this.correctAnswer}
        />
        <ActionButton
          text="Incorrect"
          backgroundColor={red}
          onPress={this.incorrectAnswer}
        />
      </View>
    );
  };

  renderScore = (score, cardCount) => {
    return (
      <View style={styles.score}>
        <Text style={styles.scoreText}>Score: </Text>
        <Text style={styles.scoreText}>
          {score} / {cardCount}
        </Text>
      </View>
    );
  };

  render() {
    const { deck } = this.props;
    const { questions } = deck;
    const { score, cardIndex, display } = this.state;
    if (cardIndex < questions.length) {
      const { question, answer } = questions[cardIndex];
      return (
        <View style={styles.container}>
          {this.renderScore(score, questions.length)}
          <View>
            {display === "question"
              ? this.renderQuestion(question)
              : this.renderAnswer(answer)}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {this.renderScore(score, questions.length)}
          <View style={styles.completionView}>
            <Text style={styles.text}>
              You have completed the quiz. Would you like to:
            </Text>
          </View>
          <View>
            <ActionButton
              text="Restart Quiz"
              backgroundColor={blue}
              onPress={this.restartQuiz}
            />
            <ActionButton
              text="Select a Different Deck"
              backgroundColor={purple}
              onPress={() => this.props.navigation.navigate("DeckList")}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    margin: 15,
    padding: 10,
    justifyContent: "space-between"
  },
  card: {
    padding: 10,
    height: 400,
    margin: 20,
    alignItems: "center"
  },
  completionView: {
    alignItems: "center",

    justifyContent: "space-between"
  },
  text: {
    fontSize: 30,
    paddingBottom: 20
  },
  score: {
    flexDirection: "row"
  },
  scoreText: {
    fontSize: 20
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
