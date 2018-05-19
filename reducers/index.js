import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      console.log(action);
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, action.question]
        }
      };
    default:
      return state;
  }
}
