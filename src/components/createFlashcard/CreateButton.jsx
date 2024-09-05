import React, { useState } from 'react';

const CreateButton = ({ setShowAnimation, formik, leftVal,setLeftVal }) => {
  

  // Function to handle button animation
  const handleAnimation = () => {
    const val = Math.round(Math.random() * 1000); // Random value for horizontal position
    setLeftVal([val, val * 100]); // Update state to move the button
  };

  // Function to determine if the form is submittable
  const isSubmitable = () => {
    // Check if all required fields are touched and there are no errors
    const isSubmittable = 
      formik.touched.groupName && 
      formik.touched.groupDescription &&
      formik.touched.term?.[0]?.termName && 
      formik.touched.term?.[0]?.termDefinition &&
      Object.keys(formik.errors).length === 0;
    
    return isSubmittable;
  };

  return (
    <>
      {isSubmitable() ? (
        <div className="relative pt-20">
          {/* Button to submit the form and trigger animation */}
          <button
            type="submit"
            onClick={() => setShowAnimation(true)}
            className="absolute w-40 py-2 left-0 right-0 mx-auto mt-10 mb-3 text-lg font-bold text-white transition-all ease-in-out bg-red-500 border-red-500 rounded-lg shadow-lg bottom-1 hover:bg-red-600 hover:text-white"
          >
            Create
          </button>
        </div>
      ) : (
        <div>
          {/* Message for missing required fields (visible on extra-large screens) */}
          <div className='hidden xl:block'>
            <p className='text-center text-red-600'>You cannot touch button until you fill all required fields!</p>
            <div className="relative pt-20 w-[100vw]">
              {/* Button with animation for incomplete form (visible on extra-large screens) */}
              <button
                type="button"
                onClick={handleAnimation}
                onMouseEnter={handleAnimation}
                onMouseMove={handleAnimation}
                style={{ left: `${leftVal[0]}px`, right: `${leftVal[1]}px` }}
                className="absolute w-40 py-2 mx-auto mt-10 mb-3 text-lg font-bold text-white transition-all ease-in-out bg-red-500 border-red-500 rounded-lg shadow-lg bottom-1 hover:bg-red-600 hover:text-white"
              >
                Create
              </button>
            </div>
          </div>
          {/* Regular submit button for smaller screens */}
          <div className="relative pt-20 xl:hidden">
            <button
              type="submit"
              className="absolute w-40 py-2 left-0 right-0 mx-auto mt-10 mb-3 text-lg font-bold text-white transition-all ease-in-out bg-red-500 border-red-500 rounded-lg shadow-lg bottom-1 hover:bg-red-600 hover:text-white"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateButton;
