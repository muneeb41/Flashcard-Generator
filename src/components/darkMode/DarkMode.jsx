import React, { useState } from 'react'


const DarkMode = () => {
     
    const handleDarkMode = ()=>{
        document.documentElement.classList.toggle('dark'); 
    }

  return (
    <div className='flex items-center mr-3 ' data-aos="fade-left">
            {/* Created a button to toggle between light mode and dark mode */}
            <span className="mx-2 font-medium text-gray-900 dark:text-gray-100 ">Light</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input onChange={handleDarkMode} type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
            </label>
            <span className="mx-2 font-medium text-gray-900 dark:text-gray-100">Dark</span>

        </div>
  )
}

export default DarkMode