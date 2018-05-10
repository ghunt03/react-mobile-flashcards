import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY, formatResults } from "./data";

export const getDecks = () =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatResults);

export const saveDeckTitle = title =>
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );

export const saveCard = (deck, question, answer) =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => {
    const decks = JSON.parse(res);
    const newCard = ({question, answer})
    decks[deck].questions.push(newCard);
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    return newCard;
  });
