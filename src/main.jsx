import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Registro from './components/Registro/Registro';
import NavbarView from './components/Nav/Nav.jsx';
import Home from './views/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Footer from './components/Footer/Footer.jsx';
import Comics from './views/comics/comics';
import Figures from './views/figures/figures';
import Funkos from './views/funkopops/funkos';
import Posters from './views/posters/poster';
import Shirts from './views/shirts/shirts';
import NewProduct from './container/NewProduct';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <NavbarView />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path='/new' element={<NewProduct/>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/figuras" element={<Figures />} />
          <Route path="/funkos" element={<Funkos />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/shirts" element={<Shirts />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



