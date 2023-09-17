import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Login from './Login';

test('renders the login component', () => {
    render(<Login />);
    const loginElement = screen.getByTestId('login');
    expect(loginElement).toBeInTheDocument();
  });
  

  