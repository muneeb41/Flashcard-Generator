import React from 'react';
import almabetter from "/almabetter.png";
import Lottie from 'lottie-react';
import defaultImageForDetails from '../animation/defautImageForDetails.json';

const Display = ({ term }) => {
  return (
    <div 
      className='box-shadow bg-white flex flex-col justify-center gap-2 m-4 p-6 lg:flex-row lg:justify-between md:mb-0 dark:bg-gray-800' 
      data-aos="fade-up"
    >
      {/* Display term image if available */}
      {term.termImage ? (
        <img 
          src={term.termImage} 
          alt="Term"
          className='rounded-lg h-40 w-[80%] sm:h-60 mx-auto sm:w-[65%] xl:w-6/12 xl:h-72 hvr-grow'
        />
      ) : (
        // Display Lottie animation if term image is not available
        <div className='relative overflow-hidden rounded-lg mx-auto w-[80%] h-40 sm:w-[65%] sm:h-60 xl:w-6/12 xl:h-72 hvr-grow'>
          <Lottie
            autoplay
            loop
            animationData={defaultImageForDetails}
            className='w-full h-full rounded-lg object-contain'
          />
        </div>
      )}

      {/* Display term definition */}
      <p className='text-center text-gray-600 dark:text-white'>
        {term.termDefinition}
      </p>
    </div>
  );
}

export default Display;
