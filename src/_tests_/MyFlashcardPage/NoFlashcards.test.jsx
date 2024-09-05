// src/_tests_/MyFlashcardPage/NoFlashcards.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import NoFlashcards from '../../components/myFlashcards/NoFlashcards'

// Mock Lottie component
vi.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div>Mocked Lottie Animation</div>,
}));

describe('NoFlashcards Component', () => {
  it('renders the "There is No FlashCard" message', () => {
    render(
      <MemoryRouter>
        <NoFlashcards />
      </MemoryRouter>
    );
    expect(screen.getByText(/There is No FlashCard/i)).toBeInTheDocument();
  });

  it('renders the "Add FlashCards" button with correct link', () => {
    render(
      <MemoryRouter>
        <NoFlashcards />
      </MemoryRouter>
    );
    const button = screen.getByText(/Add FlashCards/i);
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders mocked Lottie animation', () => {
    render(
      <MemoryRouter>
        <NoFlashcards />
      </MemoryRouter>
    );
    expect(screen.getByText(/Mocked Lottie Animation/i)).toBeInTheDocument();
  });
});
