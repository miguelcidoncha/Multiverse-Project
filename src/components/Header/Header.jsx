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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register"><i className="fas fa-user-secret"></i></Link></li>
          <li><Link to="/login">Login</Link></li> 
          <li><Link to="/cart">🛒</Link></li>
          <li><Link to="/liked">🤍</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;