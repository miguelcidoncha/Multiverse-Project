import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Nav from './Nav';

test('renders the navbar with navigation links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  
  const comicsLink = screen.getByText('Comics');
  const figuresLink = screen.getByText('Figures');
  const funkosLink = screen.getByText('Funko Pops');
  const postersLink = screen.getByText('Posters');
  const shirtsLink = screen.getByText('Shirts');

  expect(comicsLink).toBeInTheDocument();
  expect(figuresLink).toBeInTheDocument();
  expect(funkosLink).toBeInTheDocument();
  expect(postersLink).toBeInTheDocument();
  expect(shirtsLink).toBeInTheDocument();
});
