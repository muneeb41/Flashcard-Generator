// src/_tests_/ShowButton.test.jsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ShowButton from '../../components/myFlashcards/ShowButton';

describe('ShowButton Component', () => {
  it('renders "Show All" text when showAllCarts is false', () => {
    const mockSetShowAllCarts = vi.fn();
    render(
      <ShowButton showAllCarts={false} setShowAllCarts={mockSetShowAllCarts} />
    );
    expect(screen.getByText(/Show All/i)).toBeInTheDocument();
  });

  it('renders "Show Less" text when showAllCarts is true', () => {
    const mockSetShowAllCarts = vi.fn();
    render(
      <ShowButton showAllCarts={true} setShowAllCarts={mockSetShowAllCarts} />
    );
    expect(screen.getByText(/Show Less/i)).toBeInTheDocument();
  });

  it('calls setShowAllCarts with false when showAllCarts is true and button is clicked', () => {
    const mockSetShowAllCarts = vi.fn();
    render(
      <ShowButton showAllCarts={true} setShowAllCarts={mockSetShowAllCarts} />
    );
    fireEvent.click(screen.getByText(/Show Less/i));
    expect(mockSetShowAllCarts).toHaveBeenCalledWith(false);
  });

  it('calls setShowAllCarts with true when showAllCarts is false and button is clicked', () => {
    const mockSetShowAllCarts = vi.fn();
    render(
      <ShowButton showAllCarts={false} setShowAllCarts={mockSetShowAllCarts} />
    );
    fireEvent.click(screen.getByText(/Show All/i));
    expect(mockSetShowAllCarts).toHaveBeenCalledWith(true);
  });
});
