import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
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
    const { deckId } = this.props;
    this.props.addCard(this.state);
    this.props.navigation.navigate("DeckView", {
      deckId
    })
  };

  render() {
    return (
      <View style={styles.container}>
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
