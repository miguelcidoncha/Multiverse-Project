import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrito from './Carrito';

test('renders Carrito component', () => {
  render(<Carrito />);
  const element = screen.getByText('Carrito');
  expect(element).toBeInTheDocument();
});