import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';
import TermForm from '../../components/createFlashcard/TermForm';
import { vi } from 'vitest';

vi.mock('react-toastify', () => ({
  toast: {
    info: vi.fn(),
  },
}));

describe('TermForm Component', () => {
  const mockFormik = {
    setFieldValue: vi.fn(),
    values: { term: [] },
  };
  
  const mockSetAddMore = vi.fn();

  const renderTermForm = (formikProps = mockFormik, addMore = [], setAddMore = mockSetAddMore) => {
    render(<TermForm formik={formikProps} addMore={addMore} setAddMore={setAddMore} />);
  };

  it('renders the TermForm component', () => {
    renderTermForm();

    // Check if the "Add More" button is present
    expect(screen.getByText('+ Add More')).toBeInTheDocument();
  });

  it('calls handleAddMore when the "Add More" button is clicked', () => {
    renderTermForm();

    const addMoreButton = screen.getByText('+ Add More');

    // Click the "Add More" button
    fireEvent.click(addMoreButton);

    // Check if setAddMore was called
    expect(mockSetAddMore).toHaveBeenCalled();

    // Check if setFieldValue was called with the correct arguments
    expect(mockFormik.setFieldValue).toHaveBeenCalledWith('term', expect.any(Array));
  });

  it('displays toast notification when a term is added', () => {
    renderTermForm();

    const addMoreButton = screen.getByText('+ Add More');

    // Click the "Add More" button
    fireEvent.click(addMoreButton);

    // Check if toast.info was called
    expect(toast.info).toHaveBeenCalledWith("Term Card Added !", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });
  });
});
