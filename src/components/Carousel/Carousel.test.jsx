import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
    it('renders the carousel with slides', () => {
      render(<Carousel />);
  
      const slideImages = screen.getAllByRole('img');
  
      expect(slideImages).toHaveLength(7);
    });
  });
  