import React from 'react';
import FlashcardCart from './FlashcardCart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FlashcardsContainer = ({ showAllCarts, allFlashcards }) => {
  
  // Filter the flashcards based on the showAllCarts condition
  const filteredFlashcards = showAllCarts ? allFlashcards : allFlashcards.slice(0, 6);

  // Initialize AOS (Animate On Scroll) for animations
  useEffect(() => {
    Aos.init({
      duration: 700, // Duration of animation
      easing: 'ease-in-sine', // Easing function for animation
      delay: 100, // Delay before animation starts
    });
  }, []);

  return (
    <div className='flex flex-row flex-wrap mx-10 gap-7 pt-3 xl:mx-40' data-aos="fade-up">
      {/* Map through filteredFlashcards to render each FlashcardCart */}
      {
        filteredFlashcards.map((elem) => (
          <FlashcardCart elem={elem} key={elem.groupId} data-aos="fade-down-left" />
        ))
      }
    </div>
  );
}

export default FlashcardsContainer;
