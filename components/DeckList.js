import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { white, blue } from "../utils/colors";
class DeckList extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  };

  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deck => {
          console.log(decks[deck]);
          const { title, questions } = decks[deck];
          return (
            <TouchableOpacity
              style={styles.deck}
              key={deck}
              onPress={() =>
                this.props.navigation.navigate("DeckView", {
                  deckId: deck
                })
              }
            >
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  deck: {
    height: 150,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
