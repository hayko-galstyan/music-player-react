import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MusicUploadForm from './MusicUploadForm';

// Mocking the useDispatch function
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

test('handles file change and triggers upload with error', async () => {
  render(<MusicUploadForm />);
  
  // Assert that the error message is not initially present
  expect(screen.queryByText(/File is required/)).toBeNull();

  // Simulate form submission without selecting a file
  fireEvent.click(screen.getByText(/Save/));

  // Wait for the validation error to be displayed
  await waitFor(() => {
    // Assert that the error message is now present
    expect(screen.getByText(/File is required/)).toBeInTheDocument();
  });
});

// Add more test cases based on your component's functionality
