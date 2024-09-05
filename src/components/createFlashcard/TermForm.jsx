import React from 'react';
import TermFormItem from './TermFormItem';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

const TermForm = ({ formik, addMore, setAddMore }) => {
  
  // Function to handle adding a new term form
  const handleAddMore = () => {
    // Add a new term entry to the list
    setAddMore((arr) => [...arr, { id: nanoid() }]);

    const newTerm = {
      termId: nanoid(),
      termName: "",
      termDefinition: "",
      termImage: "",
    };
    
    // Update the Formik field value for terms
    const updatedTerms = [...formik.values.term, newTerm];
    formik.setFieldValue('term', updatedTerms);

    // Show a toast notification when a new term is added
    toast.info("Term Card Added!", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div
      className='w-[80vw] mx-auto mt-5 p-5 bg-white box-shadow flex-col flex gap-2 dark:bg-gray-800'
      data-aos="fade-up"
    >
      {/* Render each term form */}
      {addMore.map((item, index) => (
        <TermFormItem
          index={index}
          key={item.id}
          setAddMore={setAddMore}
          id={item.id}
          addMore={addMore}
          formik={formik}
        />
      ))}

      {/* Button to add more terms */}
      <button
        type='button'
        className="inline-block mt-4 font-bold text-blue-700 cursor-pointer"
        onClick={handleAddMore}
      >
        + Add More
      </button>
    </div>
  );
}

export default TermForm;
