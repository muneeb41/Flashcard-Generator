import React from 'react';

const Sidebar = ({ data, selectedTerm, setSelectedTerm }) => {
  return (
    <div 
      className='box-shadow flex flex-col mx-5 bg-white mt-4 md:pl-3 dark:bg-gray-800' 
      data-aos="fade-right"
    >
      {/* Sidebar header */}
      <h1 className='p-1 font-semibold text-gray-500 text-center md:text-start'>
        Flashcards
      </h1>
      <hr className="border-gray-300 w-[90%] mx-4 md:w-[85%] md:mx-2" />
      
      {/* List of terms */}
      <div className='flex flex-row flex-wrap justify-around md:flex-col md:items-start md:w-40'>
        {data.term.map((elem, i) => (
          <div
            key={i}
            className={`p-1 cursor-pointer dark:text-white hvr-grow ${
              selectedTerm === i 
                ? "text-red-600 font-bold dark:text-red-600 text-xl" 
                : "text-gray-800 hover:text-red-600"
            }`}
          >
            <button onClick={() => setSelectedTerm(i)}>
              {elem.termName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
