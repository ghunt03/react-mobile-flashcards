import React from "react";
import { View, Text, Platform, StatusBar } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import DeckView from "./components/DeckView";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import { Constants } from "expo";
import { white, blue } from "./utils/colors";
import { setLocalNotification } from "./utils/notifcations";

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        title: "New Deck",
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : blue
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
