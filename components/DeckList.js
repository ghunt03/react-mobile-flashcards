import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";
import { white, blue } from "../utils/colors";
class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks()
  }

  
  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deck => {
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
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.cardCount}>{questions.length} Cards</Text>
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
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize:30
  },
  cardCount: {
    fontSize:20
  }
});

const mapStateToProps = (decks, ownProps) => {
  return {
    decks
  };
};



const mapDispatchToProps = dispatch => ({
  getDecks: data => dispatch(getDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
