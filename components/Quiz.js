import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";

class Quiz extends Component {
    render() {
        const { deck } = this.props;
        return (
            <View>
                <FlatList />
                </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deck: state[deckId]
  };
};

export default connect(mapStateToProps)(Quiz);
