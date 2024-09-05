import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const DetailsHeader = ({ data }) => {
  return (
    <div className='flex flex-col gap-1 sm:flex-row ' data-aos="fade-left">
      {/* Back button to navigate to 'myflashcards' */}
      <div className='flex flex-col justify-center items-center mt-3 sm:ml-20 md:ml-24 lg:ml-36 xl:ml-40 animate-pulse'>
        <Link to='/myflashcards'>
          <BsArrowLeft className="text-2xl cursor-pointer hover:text-red-600 " />
        </Link>
      </div>
      
      {/* Flashcard group details */}
      <div className='flex flex-col gap-2 mx-4 sm:mt-4 md:mt-2'>
        {/* Group name */}
        <h1 className='text-2xl font-bold'>{data.groupName}</h1>
        
        {/* Group description */}
        <p className='text-gray-500 sm:mr-11 md:mr-24 lg:mr-32 dark:text-gray-900 '>
          {data.groupDescription}
        </p>
      </div>
    </div>
  );
};

export default DetailsHeader;
