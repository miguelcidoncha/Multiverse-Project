import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);

    // Comprueba si el logo se renderiza en el Header
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();

    // Comprueba si los enlaces se renderizan en el Header
    const homeLink = screen.getByTestId('home-link');
    expect(homeLink).toBeInTheDocument();

    const registerLink = screen.getByTestId('register-link');
    expect(registerLink).toBeInTheDocument();

    const loginLink = screen.getByTestId('login-link');
    expect(loginLink).toBeInTheDocument();

    const cartLink = screen.getByTestId('cart-link');
    expect(cartLink).toBeInTheDocument();

    const heartLink = screen.getByTestId('heart-link');
    expect(heartLink).toBeInTheDocument();
  });
});
