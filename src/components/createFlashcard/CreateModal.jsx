import React from 'react';
import Lottie from "lottie-react";
import success from "../animation/success.json";

const CreateModal = () => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center rounded-lg z-10">
      {/* Modal container */}
      <div className="box-shadow relative hvr-grow z-20 w-auto h-[100vh] sm:h-[100vh]">
        {/* Lottie animation for success */}
        <Lottie
          autoplay
          loop={false}
          animationData={success}
        />
      </div>
    </div>
  );
};

export default CreateModal;
