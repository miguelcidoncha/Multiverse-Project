import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavbarView() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container className='nav-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav style={{marginInline:'auto'}}>
            <Nav.Link href="#comics">Cómics</Nav.Link>
            <Nav.Link href="#figuras">Figuras</Nav.Link>
            <Nav.Link href="#funkopops">Funko Pops</Nav.Link>
            <Nav.Link href="#posters">Pósters</Nav.Link>
            <Nav.Link href="#camisetas">Camisetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarView;

