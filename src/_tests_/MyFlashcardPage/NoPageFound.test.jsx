// src/_tests_/NoPageFound.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NoPageFound from '../../components/NoPageFound';

describe('NoPageFound Component', () => {
  it('renders the "No Page Found" message', () => {
    render(<NoPageFound />);
    expect(screen.getByText(/No Page Found/i)).toBeInTheDocument();
  });
});
