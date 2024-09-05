import React, { useEffect, useState } from "react";
import GroupForm from "../../components/createFlashcard/GroupForm";
import TermForm from "../../components/createFlashcard/TermForm";
import CreateButton from "../../components/createFlashcard/CreateButton";
import { useFormik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import { addFlashcard } from "../../redux/flashcard/flashcardSlice";
import validationSchema from "../../validation/validationSchema";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "@reduxjs/toolkit";
import CreateModal from "../../components/createFlashcard/CreateModal";

const CreateFlashCard = () => {
  // State to manage adding more term forms
  const [addMore, setAddMore] = useState([{ id: 1 }]);
  const [leftVal, setLeftVal] = useState([0, 0]); // State to control the button's position
  // State to manage the modal animation
  const [showAnimation, setShowAnimation] = useState(false);
  const formData = useSelector((state) => state.flashcard.formData); // Accessing initial form data from Redux store
  const dispatch = useDispatch();

  // Formik setup for handling form submission, validation, and state
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.groupId = nanoid(); // Generate a unique ID for the group
      dispatch(addFlashcard(values)); // Dispatch action to add flashcard to Redux store
      toast.success("FlashCard Created Successfully", { // Show success toast notification
        theme: "colored",
        position: "top-center",
        pauseOnFocusLoss: false,
      });
      setAddMore([{ id: 1 }]); // Reset additional term forms
      setLeftVal([0,0]);
      resetForm(); // Reset the form to initial values
    }
  });

  // Effect to control the display of animation after submission
  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  }, [showAnimation]);

  return (
    <div>
      {showAnimation && <CreateModal />} {/* Show modal if animation is enabled */}
      <form onSubmit={formik.handleSubmit}>
        <GroupForm formik={formik} />
        <TermForm formik={formik} addMore={addMore} setAddMore={setAddMore} />
        <CreateButton setShowAnimation={setShowAnimation} formik={formik} setLeftVal={setLeftVal} leftVal={leftVal} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateFlashCard;
