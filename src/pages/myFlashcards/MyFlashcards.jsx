import React, { useState } from 'react';
import FlashcardsContainer from '../../components/myFlashcards/FlashcardsContainer';
import ShowButton from '../../components/myFlashcards/ShowButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoFlashcards from '../../components/myFlashcards/NoFlashcards';
import { useSelector } from 'react-redux';

const MyFlashcards = () => {
    // State to control whether to show all flashcards or just a subset
    const [showAllCarts, setShowAllCarts] = useState(false);

    // Selector to get all flashcards from the Redux store
    const allFlashcards = useSelector(state => state.flashcard.flashcards);

    return (
        <div>
            {/* Conditional rendering based on the presence of flashcards */}
            {allFlashcards.length > 0 ? (
                <div>
                    {/* Component to display flashcards */}
                    <FlashcardsContainer showAllCarts={showAllCarts} allFlashcards={allFlashcards} />
                    {/* Button to toggle between showing all flashcards or a subset */}
                    <ShowButton showAllCarts={showAllCarts} setShowAllCarts={setShowAllCarts} />
                </div>
            ) : (
                // Component to display when no flashcards are available
                <NoFlashcards />
            )}
            {/* Toast container for displaying toast notifications */}
            <ToastContainer />
        </div>
    );
}

export default MyFlashcards;
