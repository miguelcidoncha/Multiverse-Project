import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='headerNav'>
        <div className='logo'>
            <img src='https://res.cloudinary.com/dit2zhtwz/image/upload/v1693134536/MULTIVERSE__1_-removebg-preview_tw4twh.png'></img>
        </div>
        <ul>
<<<<<<< HEAD
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register"><i className="fas fa-user-secret"></i></Link></li>
          <li><Link to="/login">Login</Link></li> 
          <li><Link to="/carrito">🛒</Link></li>
=======
          <li><Link to="/" data-testid="home-link">Home</Link></li>
          <li><Link to="/register" data-testid="register-link"><i className="fas fa-user-secret"></i></Link></li>
          <li><Link to="/login" data-testid="login-link">Login</Link></li> 
          <li><Link to="/carrito" data-testid="cart-link">🛒</Link></li> 
          <li><Link to="/liked">🤍</Link></li>
>>>>>>> origin/Javier
        </ul>

 
      </nav>
    </header>
  );
};


export default Header;