import React, { Component } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Alert, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { createCard } from "../actions";
import { white } from "../utils/colors";


class AddCard extends Component {
  constructor(props) {
    super(props);
    const { deckId } = this.props;
    this.state = { deckId, question: "", answer: "" };
  }

  createCard = () => {
    const { deckId, question, answer } = this.state;
    if (!question && !answer) {
      Alert.alert(
        "Mobile Flash Cards",
        "A Question and Answer is required to add the card to the deck"
      );
    } else {
      this.props.addCard(this.state).then(data => {
        this.props.navigation.navigate("DeckView", {
          deckId
        });
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.title}>Add Card to Deck</Text>
          <Text>Question</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <Text>Answer</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <ActionButton text="Submit" onPress={this.createCard} />
      </KeyboardAvoidingView>
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
  textInput: {
    padding: 10,
    margin: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  title: {
    fontSize: 30
  }
});

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params;
  return {
    deckId
  };
};

const mapDispatchToProps = dispatch => ({
  addCard: data => dispatch(createCard(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
