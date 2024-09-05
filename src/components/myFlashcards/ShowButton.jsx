import React from 'react';

const ShowButton = ({ showAllCarts, setShowAllCarts }) => {
  
  const handleToggle = () => {
    setShowAllCarts(prevState => !prevState);
  };

  return (
    <div className='flex flex-row-reverse mt-5'>
      <button
        className="w-24 mx-5 mb-24 font-bold text-red-700"
        onClick={handleToggle}
      >
        {showAllCarts ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default ShowButton;
