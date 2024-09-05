import React from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink for routing

const NavBar = () => {
  return (
    <nav className="m-auto mt-[5px] w-[80%] mb-1 p-[10px]">
      <div className="m-auto text-center relative">
        {/* Title with animation */}
        <h1 className="text-lg font-bold text-left" data-aos="fade-down">Create Flashcard</h1>
        <ul className="flex flex-row space-x-11 my-3 mx-1 text-gray-500 font-bold text-text-base">
          {/* Navigation links with hover effects and animations */}
          <li className="pb-2 hover:text-red-500 hover:border-b-4 hover:border-red-500 hover:pb-0.5 rounded-[0.5px] transition-colors duration-1000 active:text-red-500 transition-none"
           data-aos="flip-left"
          >
            <NavLink to={"/"}>Create New</NavLink>
          </li>
          <li className="pb-2 hover:text-red-500 hover:border-b-4 hover:border-red-500 hover:pb-0.5 rounded-[0.5px] transition-colors duration-1000 active:text-red-500 transition-none"
           data-aos="flip-right"
          >
            <NavLink to={"/myflashcards"}>My Flashcard</NavLink>
          </li>
        </ul>
      </div>
      {/* Horizontal divider */}
      <hr className="border-1 border-gray-400 -my-[13.5px]" />
    </nav>
  );
}

export default NavBar;
