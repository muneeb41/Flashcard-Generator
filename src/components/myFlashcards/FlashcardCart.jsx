import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import almabetter from '/almabetter.png';
import { useDispatch } from 'react-redux';
import { deleteFlashcard } from '../../redux/flashcard/flashcardSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const FlashcardCart = ({ elem }) => {
  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(deleteFlashcard(elem.groupId));
    // Show delete notification
    toast.error("Flashcard Deleted Successfully", {
      theme: "colored",
      position: "top-center",
      pauseOnFocusLoss: false,
    });
  };

  return (
    <div className="hvr-grow dark:bg-gray-800 flex flex-col items-center m-auto bg-white w-60 sm:w-72 h-[200px] p-[8px] rounded mt-16 relative mb-1 box-shadow">
      {/* Delete button for each flashcard */}
      <button
        className="absolute text-3xl text-gray-500 del -right-3 -top-5 hover:text-4xl hover:text-red-600"
        onClick={handleDeleteCart}
      >
        <GiCrossMark />
      </button>

      {/* Group image or default image */}
      <img
        className="border-2 bg-slate-400 w-[70px] h-[70px] m-auto rounded-full absolute -top-12 left-[39.3%] mb-10 animate-bounce"
        src={elem.groupImage ? elem.groupImage : almabetter}
        alt=""
        data-aos="flip-right"
      />

      <h1 className="mt-4 font-bold">{elem.groupName}</h1>

      <p className="h-10 mt-1 text-gray-700 text-center break-words dark:text-gray-400">
        {elem.groupDescription.length > 60
          ? `${elem.groupDescription.slice(0, 60)}...`
          : elem.groupDescription}
      </p>

      <h2 className="mt-8 font-bold text-gray-500">
        {elem.term.length} Cards
      </h2>

      <Link to={`/flashcarddetails/${elem.groupId}`}>
        <button
          className="w-40 h-8 m-auto font-medium text-red-600 duration-300 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white"
        >
          View Cards
        </button>
      </Link>
    </div>
  );
};

export default FlashcardCart;
