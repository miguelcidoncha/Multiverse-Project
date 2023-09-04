import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the contact information', () => {
    render(<Footer />);

    const contactInfo = screen.getByText('Contacto');
    const phoneNumbers = screen.getAllByTestId('phone-number');

    expect(contactInfo).toHaveTextContent('Contacto');
    expect(phoneNumbers).toHaveLength(2);
  });

  it('renders the social media icons', () => {
    render(<Footer />);

    const socialIcons = screen.getAllByRole('link');

    expect(socialIcons).toHaveLength(3);
  });

  it('renders the information links', () => {
    render(<Footer />);

    const informationLinks = screen.getAllByRole('listitem');

    expect(informationLinks).toHaveLength(4);
  });

  it('renders the copyright information', () => {
    render(<Footer />);

    const copyrightInfo = screen.getByText('© 2023 Multiverse');

    expect(copyrightInfo).toHaveTextContent('© 2023 Multiverse');
  });
});
