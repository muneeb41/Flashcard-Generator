import React from 'react';
import { RiArrowGoForwardLine } from 'react-icons/ri';
import { TbDownload } from 'react-icons/tb';
import { LiaPrintSolid } from 'react-icons/lia';
import PdfDownloadModal from './downloadModal/PdfDownloadModal';

const Controls = ({ setShowShareModal, data }) => {
  return (
    <div 
      className='flex flex-row justify-around flex-wrap gap-3 p-4 md:flex-col md:gap-8 md:justify-center' 
      data-aos="fade-left"
    >
      {/* Share Button */}
      <button 
        className='box-shadow bg-white flex flex-row gap-2 py-2 px-4 w-36 hover:bg-red-300 dark:bg-gray-800 dark:text-white hvr-grow'
        onClick={() => setShowShareModal(true)}
      >
        <RiArrowGoForwardLine className="mt-1" />
        <div className='text-gray-700 font-bold dark:text-white'>Share</div>
      </button>

      {/* Download Button with Modal */}
      <div 
        className='box-shadow bg-white flex flex-row gap-2 py-2 px-4 w-36 hover:bg-red-300 font-bold text-gray-700 dark:text-white dark:bg-gray-800 hvr-grow'
      >
        <TbDownload className="mt-1 animate-bounce" />
        <PdfDownloadModal buttonLabel="Download" flashcardData={data} />
      </div>

      {/* Print Button */}
      <button 
        className='box-shadow bg-white flex flex-row gap-2 py-2 px-4 w-36 hover:bg-red-300 dark:bg-gray-800 dark:text-white hvr-grow'
        onClick={() => window.print()}
      >
        <LiaPrintSolid className="mt-1" />
        <div className='text-gray-700 font-bold dark:text-white'>Print</div>
      </button>
    </div>
  );
}

export default Controls;
