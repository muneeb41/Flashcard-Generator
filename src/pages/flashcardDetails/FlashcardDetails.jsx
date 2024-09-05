import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsHeader from '../../components/flashcardDetails/DetailsHeader';
import Sidebar from '../../components/flashcardDetails/Sidebar';
import Display from '../../components/flashcardDetails/Display';
import Controls from '../../components/flashcardDetails/Controls';
import Pagination from '../../components/flashcardDetails/Pagination';
import ShareModal from '../../components/flashcardDetails/shareModal/ShareModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlashcardDetails = () => {
  // Get the groupId from the URL parameters
  const { groupId } = useParams();
  // State to manage the currently selected term index
  const [selectedTerm, setSelectedTerm] = useState(0);
  // State to manage the visibility of the share modal
  const [showShareModal, setShowShareModal] = useState(false);

  // Get the flashcard data from the Redux store based on the groupId
  const data = useSelector(state => state.flashcard.flashcards.find(item => item.groupId == groupId));

  return (
    <div>
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
      
      {/* DetailsHeader component displaying the flashcard group details */}
      <DetailsHeader data={data} />
      
      <div className='flex flex-col md:flex-row md:justify-center mx-5 lg:mx-20 xl:mx-28'>
        {/* Sidebar component for navigation between terms */}
        <Sidebar data={data} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        
        {/* Display component to show the details of the currently selected term */}
        <Display term={data.term[selectedTerm]} />
        
        {/* Controls component for additional actions (e.g., sharing) */}
        <Controls setShowShareModal={setShowShareModal} data={data} />
      </div>
      
      {/* Divider line */}
      <p className="mx-auto h-3 w-60 bg-black opacity-5 mt-3 rounded-[100%] shadow-xl"></p>
      
      {/* Pagination component for navigating through terms */}
      <Pagination data={data} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      
      {/* Conditionally render the ShareModal based on state */}
      {showShareModal && <ShareModal setShowShareModal={setShowShareModal} />}
    </div>
  );
};

export default FlashcardDetails;
