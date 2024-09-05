import React from "react";
import { GiCrossMark } from "react-icons/gi";
import ShareLink from "./ShareLink";
import SocialMediaLinks from "./SocialMediaLinks";

const ShareModal = ({ setShowShareModal }) => {
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 bg-black z-2 bg-opacity-60 flex justify-center items-center rounded-lg"
      data-aos="zoom-in-up"
    >
      <div className="box-shadow px-10 py-5 bg-white relative m-6 sm:py-11 dark:bg-gray-800 hvr-grow">
        {/* Close button for the modal */}
        <button
          className="absolute text-3xl text-gray-500 del -right-3 -top-3 hover:text-4xl hover:text-red-600"
          onClick={() => setShowShareModal(false)}
        >
          <GiCrossMark />
        </button>
        
        {/* Component to display a shareable link */}
        <ShareLink />
        
        {/* Component to display social media sharing options */}
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default ShareModal;
