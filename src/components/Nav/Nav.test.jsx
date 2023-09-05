import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavbarView from './Nav';

describe('NavbarView', () => {
  it('renders the navbar with navigation links', () => {
    render(
      <BrowserRouter>
        <NavbarView />
      </BrowserRouter>
    );

    const comicsLink = screen.getByText('Cómics');
    const figurasLink = screen.getByText('Figuras');
    const funkosLink = screen.getByText('Funko Pops');
    const postersLink = screen.getByText('Pósters');
    const shirtsLink = screen.getByText('Camisetas');

    expect(comicsLink).toBeVisible();
    expect(figurasLink).toBeVisible();
    expect(funkosLink).toBeVisible();
    expect(postersLink).toBeVisible();
    expect(shirtsLink).toBeVisible();

  });
});