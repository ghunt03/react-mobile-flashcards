import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY, formatResults } from "./data";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatResults);
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
}

// export function submitEntry({entry,key}) {
//     return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//         [key]: entry
//     }))
// }

// {
//     React: {
//       title: 'React',
//       questions: [
//         {
//           question: 'What is React?',
//           answer: 'A library for managing user interfaces'
//         },
//         {
//           question: 'Where do you make Ajax requests in React?',
//           answer: 'The componentDidMount lifecycle event'
//         }
//       ]
//     },
//     JavaScript: {
//       title: 'JavaScript',
//       questions: [
//         {
//           question: 'What is a closure?',
//           answer: 'The combination of a function and the lexical environment within which that function was declared.'
//         }
//       ]
//     }
//   }
