import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "MOBILEFLASHCARDS:Decks"

function setDummyData() {
  var data = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))

  return data
}

export function formatResults(results) {
  return results === null ? setDummyData() : JSON.parse(results);
}
