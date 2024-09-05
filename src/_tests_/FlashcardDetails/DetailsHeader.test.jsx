// src/_tests_/FlashcardDetails/check.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DetailsHeader from '../../components/flashcardDetails/DetailsHeader';
import { BrowserRouter as Router } from 'react-router-dom';

// Sample data to pass as props
const mockData = {
  groupName: 'Flashcard Group',
  groupDescription: 'Description of flashcard group',
};

describe('DetailsHeader Component', () => {
  it('renders correctly with given props', () => {
    render(
      <Router>
        <DetailsHeader data={mockData} />
      </Router>
    );

    // Check if elements are in the document
    expect(screen.getByRole('heading', { name: /Flashcard Group/i })).toBeInTheDocument();
    expect(screen.getByText(/Description of flashcard group/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
