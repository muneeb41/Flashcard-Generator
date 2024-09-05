import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateFlashCard from '../pages/createFlashCard/CreateFlashCard'
import MyFlashcards from '../pages/myFlashcards/MyFlashcards'
import FlashcardDetails from '../pages/flashcardDetails/FlashcardDetails'
import NoPageFound from '../components/NoPageFound'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            {/* Route for the CreateFlashCard page */}
            <Route path='/' element={<CreateFlashCard/>} />

            {/* Route for the MyFlashcards page */}
            <Route path='/myflashcards' element={<MyFlashcards/>} />

            {/* Route for the FlashcardDetails page with dynamic groupId parameter */}
            <Route path='/flashcarddetails/:groupId' element={<FlashcardDetails/>} />

            {/* Catch-all route for undefined paths */}
            <Route path='*' element={<NoPageFound/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes
