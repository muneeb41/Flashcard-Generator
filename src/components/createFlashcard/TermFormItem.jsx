import React, { useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";
import { toast } from "react-toastify";

const TermFormItem = ({ index, setAddMore, id, addMore, formik }) => {
  const imageRef = useRef(); // Reference for file input
  const focusRef = useRef(); // Reference for term name input

  // Handle deletion of a term form
  const handleDelete = () => {
    setAddMore((arr) => arr.filter((item) => item.id != id));
    const updatedTerms = formik.values.term.filter((_, i) => i !== index);
    formik.setFieldValue("term", updatedTerms);

    // Show toast notification for term deletion
    toast.warn("Term Card Deleted !", {
      position: "top-right",
      pauseOnFocusLoss: false,
    });
  };

  // Trigger file input when image area is clicked
  const handleImageClick = () => {
    imageRef.current.click();
  };

  // Handle change of image input and update Formik field
  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      formik.setFieldValue(`term.${index}.termImage`, reader.result);
    };
  };

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:justify-between hvr-grow">
      {/* Main container for term item */}
      <div className="flex flex-col gap-2 md:flex-row lg:w-3/4">
        {/* Display the term number */}
        <div className="md:my-auto lg:mt-3">
          <div className="w-8 h-8 px-2 text-xl text-center text-white bg-red-500 rounded-full mr-3">
            {index + 1}
          </div>
        </div>
        {/* Input field for term name */}
        <div className="md:w-3/6">
          <label htmlFor={`term.${index}.termName`}>Enter Term*</label>
          <div>
            <input
              type="text"
              id={`term-${index}-termName`}
              ref={focusRef}
              placeholder="Term Name"
              name={`term.${index}.termName`}
              className="p-2 text-sm text-gray-900 border border-gray-400 rounded-md w-5/6 lg:w-full bg-gray-50"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.term[index].termName}
            />
            {/* Error message for term name */}
            {formik.touched.term &&
            formik.touched.term[index]?.termName &&
            formik.errors.term &&
            formik.errors.term[index]?.termName ? (
              <div className="text-red-500">
                {formik.errors.term[index].termName}
              </div>
            ) : null}
          </div>
        </div>
        {/* Input field for term definition */}
        <div className="md:w-3/6 lg:ml-2 dark:bg-gray-800">
          <label htmlFor={`term.${index}.termDefinition`}>
            Term Definition*
          </label>
          <div className="dark:bg-gray-800">
            <textarea
              name={`term.${index}.termDefinition`}
              placeholder="Term Definition..."
              className="w-5/6 lg:w-full h-10 p-2 text-sm text-gray-700 transition-all duration-500 border border-gray-400 rounded-md resize-none focus:h-24 bg-gray-50 dark:bg-gray-800 dark:text-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.term[index].termDefinition}
            ></textarea>
            {/* Error message for term definition */}
            {formik.touched.term &&
            formik.touched.term[index]?.termDefinition &&
            formik.errors.term &&
            formik.errors.term[index]?.termDefinition ? (
              <div className="text-red-500">
                {formik.errors.term[index].termDefinition}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Image upload and delete container */}
      {formik.values.term[index].termImage ? (
        <div className="flex justify-center lg:mr-11">
          <img
            className="w-20 h-20 p-1 rounded-lg"
            src={formik.values.term[index].termImage}
            alt=""
          />
          <GiCrossMark
            className="mr-5 text-lg cursor-pointer hover:text-red-600"
            onClick={() => formik.setFieldValue(`term.${index}.termImage`, "")}
          />
        </div>
      ) : (
        <div className="flex flex-row sm:justify-center">
          {/* Button to select image */}
          <label
            className="groupImage order my-auto w-36 cursor-pointer sm:ml-5 p-4 border border-blue-700 flex items-center justify-center rounded text-sm py-5 sm:py-4"
            onClick={handleImageClick}
          >
            <span className="font-bold sm:text-lg text-blue-700 text-sm">
              Select Image
            </span>
          </label>
          <input
            type="file"
            className="hidden"
            ref={imageRef}
            onChange={handleImageChange}
          />
          {/* Edit and delete icons */}
          <div className="flex flex-col justify-center">
            {addMore.length != 1 && (
              <RiDeleteBin6Line
                className="text-[1.8em] text-gray-500 m-2 cursor-pointer hover:text-red-600"
                onClick={handleDelete}
              />
            )}
            <label htmlFor={`term.${index}.termName`} onClick={() => focusRef.current.focus()}>
              <BiEdit className="text-[1.8em] text-gray-500 m-2 cursor-pointer hover:text-yellow-600" />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermFormItem;
