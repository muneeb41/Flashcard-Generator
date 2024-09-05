import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from './flashcard/flashcardSlice'

// Create and configure the Redux store
const store = configureStore({ 
  reducer: {
    // Define the 'flashcard' slice reducer to handle state related to flashcards
    flashcard: flashcardReducer,
  },
});

export default store;
