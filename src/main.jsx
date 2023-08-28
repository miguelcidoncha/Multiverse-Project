import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Registro from './components/Registro/Registro';
import Carrito from './components/Carrito/Carrito'
import NavbarView from './components/Nav/Nav.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>

      <Header />
      <NavbarView />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/registro" element={<Registro />} /> 
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  </React.StrictMode>,
)
