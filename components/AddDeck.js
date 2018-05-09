import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { white, blue } from "../utils/colors";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api";
class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Deck title" };
  }

  createDeck = () => {
    const { title } = this.state;
    this.props.dispatch(
      addDeck({
        [title]: {
          title,
          questions: []
        }
      })
    );
    saveDeckTitle(title);
    this.toHome();
  };

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: "AddDeck"
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title for your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        {Platform.OS === "ios" ? (
          <TouchableOpacity style={styles.iosBtn} onPress={this.createDeck}>
            <Text style={{ color: white }}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.androidBtn} onPress={this.createDeck}>
            <Text>Submit</Text>
          </TouchableOpacity>
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
  textInput: {
    padding: 10,
    margin: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },

  iosBtn: {
    backgroundColor: blue,
    borderRadius: 2,

    padding: 10,
    margin: 10,
    alignItems: "center"
  },
  androidBtn: {
    margin: 5,
    backgroundColor: blue,
    padding: 10,
    borderRadius: 2
  }
});

export default connect()(AddDeck);
