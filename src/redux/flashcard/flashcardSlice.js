import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

// Load stored flashcards from localStorage, if available
const storedFlashcards = JSON.parse(localStorage.getItem("flashcards"));

// Define the initial state of the flashcard slice
const initialState = {
  formData: {
    groupId: nanoid(), // Generate a unique ID for the group
    groupName: "",
    groupImage: "",
    groupDescription: "",
    term: [
      {
        termId: nanoid(), // Generate a unique ID for the term
        termName: "",
        termDefinition: "",
        termImage: "",
      },
    ],
  },
  flashcards: storedFlashcards || [], // Initialize with stored flashcards if available
};

// Create a slice for flashcards
const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    // Reducer to add a new flashcard
    addFlashcard: (state, action) => {
      state.flashcards.unshift(action.payload); // Add the new flashcard to the beginning of the array

      // Update local storage with the new flashcards array
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
    // Reducer to delete a flashcard by its groupId
    deleteFlashcard: (state, action) => {
      state.flashcards = state.flashcards.filter(item => item.groupId !== action.payload); // Remove flashcard with matching groupId

      // Update local storage with the updated flashcards array
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

// Export the action creators and reducer
export const { deleteFlashcard, addFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
