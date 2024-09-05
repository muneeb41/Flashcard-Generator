import { render ,screen } from "@testing-library/react";
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "../../components/common/NavBar";
import Logo from "../../components/common/Logo";

test('renders Logo component correctly', () => {
    render(<Logo />);
  
    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('AlmaBetterLogo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/logo.png');
  
    
  });



describe('NavBar Component', () => {
  it('renders NavBar component correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    // Check if the heading is present
    expect(screen.getByText('Create Flashcard')).toBeInTheDocument();

    // Check if both NavLink elements are present and have correct text
    const createNewLink = screen.getByText('Create New');
    const myFlashcardLink = screen.getByText('My Flashcard');

    expect(createNewLink).toBeInTheDocument();
    expect(myFlashcardLink).toBeInTheDocument();

    // Check if the NavLink elements have the correct href attributes
    expect(createNewLink.closest('a')).toHaveAttribute('href', '/');
    expect(myFlashcardLink.closest('a')).toHaveAttribute('href', '/myflashcards');
  });

  it('applies correct styles and animations to NavLinks', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const createNewLink = screen.getByText('Create New');
    const myFlashcardLink = screen.getByText('My Flashcard');

   
   // Use act to wrap the click event
   act(() => {
    createNewLink.click();
  });
  expect(window.location.pathname).toBe('/');

  act(() => {
    myFlashcardLink.click();
  });
  expect(window.location.pathname).toBe('/myflashcards');
  });
});