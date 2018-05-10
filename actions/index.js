import * as FlashCardsAPI from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export const getDecks = () => dispatch =>
  FlashCardsAPI.getDecks().then(data => dispatch(receiveDecks(data)));

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const createDeck = ({ title }) => dispatch =>
  FlashCardsAPI.saveDeckTitle(title).then(() => {
    const deck = {
      [title]: {
        title,
        questions: []
      }
    };
    return dispatch(addDeck(deck));
  });

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const createCard = ({ deckId, question, answer }) => dispatch =>
  FlashCardsAPI.saveCard(deckId, question, answer).then(newCard =>
    dispatch(addCard(deckId, newCard))
  );

export const addCard = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card
});
