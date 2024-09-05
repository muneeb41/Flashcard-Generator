import React, { useRef } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";

const GroupForm = ({ formik }) => {
  const imageRef = useRef(); // Reference to the file input element

  // Trigger the file input click event
  const handleImageClick = () => {
    imageRef.current.click();
  };

  // Handle image file selection and convert it to a base64 string
  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      formik.setFieldValue("groupImage", reader.result);
    };
  };

  return (
    <div className="w-[80vw] mx-auto mt-10 p-5 bg-white box-shadow flex-col flex gap-2 dark:bg-gray-800 hvr-grow mb-10">
      {/* Group name input */}
      <label htmlFor="groupName">Create Group*</label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="sm:w-5/12">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            className="border-2 rounded-md h-9 pl-3 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.groupName}
          />
          {/* Display error message if groupName validation fails */}
          {formik.touched.groupName && formik.errors.groupName ? (
            <div className="text-red-500">{formik.errors.groupName}</div>
          ) : null}
        </div>

        {/* Display selected image or upload button */}
        {formik.values.groupImage ? (
          <div className="flex">
            <img
              className="text-center rounded-full h-28 w-28 mx-7 md:animate-bounce"
              src={formik.values.groupImage}
              alt=""
              data-aos="fade-down"
            />
            {/* Remove image button */}
            <GiCrossMark
              name="groupImgDelIcon"
              className="mt-[10px] -ml-[20px] text-gray-400 hover:text-red-600 hover:text-xl hover:cursor-pointer"
              onClick={() => formik.setFieldValue("groupImage", null)}
            />
          </div>
        ) : (
          <div className="h-9 mt-2 ml-0 sm:mt-0" onClick={handleImageClick}>
            {/* Image upload button */}
            <label
              htmlFor="groupImage"
              className="groupImage w-40 h-[3px] cursor-pointer px-2 sm:ml-5 p-4 border border-gray-400 flex items-center justify-center rounded text-sm"
            >
              <MdOutlineUploadFile className="text-[2em] text-blue-700" />
              <span className="font-bold text-blue-700">Upload Image</span>
            </label>
            {/* Hidden file input */}
            <input
              type="file"
              name="groupImage"
              className="hidden"
              ref={imageRef}
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>

      {/* Group description input */}
      <label htmlFor="groupDescription">Add Description</label>
      <textarea
        name="groupDescription"
        placeholder="Group Description"
        className="w-full md:w-8/12 lg:w-5/6 h-28 dark:bg-gray-800 dark:text-white"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.groupDescription}
      />
      {/* Display error message if groupDescription validation fails */}
      {formik.touched.groupDescription && formik.errors.groupDescription ? (
        <div className="text-red-500">{formik.errors.groupDescription}</div>
      ) : null}
    </div>
  );
};

export default GroupForm;
