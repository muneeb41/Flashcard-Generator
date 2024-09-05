// src/_tests_/FlashcardDetails/Display.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Display from '../../components/flashcardDetails/Display'; 

// Mock the Lottie component
import { vi } from 'vitest';
vi.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div>Lottie Animation Mock</div>,
}));

describe('Display Component', () => {
  it('renders term image when termImage is provided', () => {
    const term = {
      termImage: '/path/to/image.png',
      termDefinition: 'This is a term definition',
    };

    render(<Display term={term} />);

    const imgElement = screen.getByAltText(''); // Use getByAltText for img
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/path/to/image.png');
    expect(screen.getByText('This is a term definition')).toBeInTheDocument();
  });

  it('renders Lottie animation when termImage is not provided', () => {
    const term = {
      termImage: null,
      termDefinition: 'This is a term definition',
    };

    render(<Display term={term} />);

    expect(screen.getByText('Lottie Animation Mock')).toBeInTheDocument();
    expect(screen.getByText('This is a term definition')).toBeInTheDocument();
  });
});
