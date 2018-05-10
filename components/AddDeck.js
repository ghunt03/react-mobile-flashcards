import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import { createDeck } from "../actions";

import ActionButton from "./ActionButton";

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  createDeck = () => {
    this.props.addDeck(this.state);
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
        <Text style={styles.title}>What is the title for your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <ActionButton text="Submit" onPress={this.createDeck}/>
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

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  addDeck: data => dispatch(createDeck(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddDeck);
