import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";



class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck List</Text>
      </View>
    );
  }
}

export default connect()(DeckList);

