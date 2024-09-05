// src/_tests_/Sidebar.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Sidebar from '../../components/flashcardDetails/Sidebar'; 

describe('Sidebar Component', () => {
  const mockSetSelectedTerm = vi.fn(); // Mock function for setSelectedTerm

 

  it('renders correctly with no terms', () => {
    const data = { term: [] };

    render(<Sidebar data={data} selectedTerm={0} setSelectedTerm={mockSetSelectedTerm} />);

    // No term buttons should be rendered
    expect(screen.queryByText('Term 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Term 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Term 3')).not.toBeInTheDocument();
  });


});
