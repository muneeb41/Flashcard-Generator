import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Pagination = ({ data, selectedTerm, setSelectedTerm }) => {
  
  // Function to handle going to the previous term
  const handlePreviousCart = () => {
    if (selectedTerm > 0) {
      setSelectedTerm(selectedTerm - 1);
    }
  };

  // Function to handle going to the next term
  const handleNextCart = () => {
    if (selectedTerm < data.term.length - 1) {
      setSelectedTerm(selectedTerm + 1);
    }
  };

  return (
    <div className='flex flex-row justify-center'>
      {/* Previous Term Button */}
      <MdNavigateBefore
        className="text-5xl cursor-pointer dark:text-gray-400 hover:text-red-500 hvr-grow"
        onClick={handlePreviousCart}
      />
      
      {/* Current Term and Total Terms Display */}
      <div className='mt-2 text-xl'>
        {selectedTerm + 1}/{data.term.length}
      </div>
      
      {/* Next Term Button */}
      <MdNavigateNext
        className="text-5xl cursor-pointer dark:text-gray-400 hover:text-red-500 hvr-grow"
        onClick={handleNextCart}
      />
    </div>
  );
};

export default Pagination;
