import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ShareLink = () => {
  // Get the current page URL
  const url = window.location.href;

  // Function to handle copying the URL to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(url); // Copy URL to clipboard
    toast.success("FlashCard Link Copied", {
      theme: "colored",
      position: "top-center",
      pauseOnFocusLoss: false,
    }); // Show success toast notification
  };

  return (
    <div className="flex flex-col mb-10">
      {/* Header for the share section */}
      <h1 className="text-2xl font-bold mb-6">Share</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {/* Display the URL */}
        <div className="border-2 border-dashed border-blue-400 rounded-lg py-2 px-3 flex-wrap flex w-36 overflow-hidden sm:w-fit hvr-grow">
          {url}
        </div>
        {/* Share actions */}
        <div className="flex flex-row gap-5 text-3xl ml-5">
          {/* Copy URL to clipboard */}
          <FaRegCopy onClick={handleCopy} className="active:text-red-400 hvr-grow" />
          {/* Placeholder for social media sharing (can be implemented later) */}
          <IoShareSocialOutline className="active:text-red-400 hvr-grow" />
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
