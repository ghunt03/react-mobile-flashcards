import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";



class AddDeck extends Component {
  render() {
    return (
      <View>
        <Text>Add Deck</Text>
      </View>
    );
  }
}

export default connect()(AddDeck);

