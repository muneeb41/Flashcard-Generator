import React from 'react';
import DarkMode from '../darkMode/DarkMode'; // Importing the DarkMode component
import logo from "/logo.png"; // Importing the logo image

const Logo = () => {
  return (
    <div
      name="logoDiv"
      className="w-[100vw] p-[10px] sticky right-0 top-0 z-10 flex mx-0 bg-white flex-row justify-center gap-6 dark:bg-[#1e2125] flex-wrap sm:justify-between"
    >
      {/* Logo image with animation */}
      <img className="h-[35px] text-left" src={logo} alt="AlmaBetterLogo" data-aos="fade-right" />
      {/* Dark mode toggle component */}
      <DarkMode />
    </div>
  );
};

export default Logo;
