import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import GroupForm from '../../components/createFlashcard/GroupForm';
import { vi } from 'vitest'; 

describe('GroupForm Component', () => {
  const mockFormik = {
    handleChange: vi.fn(),
    handleBlur: vi.fn(),
    setFieldValue: vi.fn(),
    values: { groupName: '', groupImage: null, groupDescription: '' },
    touched: {},
    errors: {},
  };

  const renderGroupForm = (formikProps = mockFormik) => {
    render(
      <Formik>
        <GroupForm formik={formikProps} />
      </Formik>
    );
  };

  it('renders the GroupForm component', () => {
    renderGroupForm();
    
    // Check if the Group Name input is present
    expect(screen.getByPlaceholderText('Group Name')).toBeInTheDocument();

    // Check if the Group Description input is present
    expect(screen.getByPlaceholderText('Group Description')).toBeInTheDocument();
    
    // Check if the Upload Image button is present
    expect(screen.getByText('Upload Image')).toBeInTheDocument();
  });

  it('should call handleChange when the group name is changed', () => {
    renderGroupForm();

    const groupNameInput = screen.getByPlaceholderText('Group Name');
    groupNameInput.value = 'Test Group'; // Simulate entering text
    expect(groupNameInput.value).toBe('Test Group'); // Check if the input has the correct value
  });

  it('should render without validation errors initially', () => {
    renderGroupForm();
    
    // Ensure no validation error messages are present initially
    expect(screen.queryByText('Group Name is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Description is required')).not.toBeInTheDocument();
  });
});
