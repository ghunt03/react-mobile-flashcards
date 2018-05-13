import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { white, blue, lightPurp } from "../utils/colors";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifcations";
class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;
    return {
      title: deckId
    };
  };
  addCard = () => {
    const { deckId } = this.props;
    this.props.navigation.navigate("AddCard", {
      deckId
    });
  };

  startQuiz = () => {
    const { deckId } = this.props;
    clearLocalNotification().then(setLocalNotification)
    this.props.navigation.navigate("Quiz", {
      deckId
    });
  };

  render() {
    const { deckId, deck } = this.props;
    const { title, questions } = deck;
    return (
      <View style={styles.container}>
        <View style={styles.cardDetails}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cardCount}>{questions.length} Cards</Text>
        </View>
        <View>
          <ActionButton
            text="Add Card"
            onPress={this.addCard}
            backgroundColor={blue}
          />
          <ActionButton
            text="Start Quiz"
            onPress={this.startQuiz}
            backgroundColor={lightPurp}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    margin: 15,
    padding: 10,
    justifyContent: "center"
  },
  cardDetails: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  title: {
    fontSize: 30
  },
  cardCount: {
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

export default connect(mapStateToProps)(DeckView);
