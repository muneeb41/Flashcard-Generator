import React from 'react'
import girlAnimation from "../animation/empty girl.json"
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";

const NoFlashcards = () => {
  
  return (
    <div className='flex flex-col items-center justify-center gap-7'>
        <div className='text-4xl font-bold text-center mt-10 '>There is No FlashCard</div>
        <div className='h-60 w-56 ' >
           {/* Using the lottie-react Player component */}
        <Lottie
          autoplay
          loop
          animationData={girlAnimation}
        />
        </div>
        <Link to='/'>
        <button
           className="w-40 h-8 m-auto font-medium text-red-600 duration-300 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white" 
           >
          Add FlashCards
        </button>
        </Link>
    </div>
  )
}

export default NoFlashcards