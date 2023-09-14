import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import NavbarView from './components/Nav/Nav.jsx';
import Home from './views/Home/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer.jsx';
import Comics from './views/comics/comics';
import Figures from './views/figures/figures'; // Importa el componente Figures
import Funkos from './views/funkopops/funkos'; 
import Posters from './views/posters/poster';
import Shirts from './views/shirts/shirts'; // Importa el componente Shirts
import Loginview from './views/login/login';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    // Crea una copia del carrito actual
    const updatedCart = [...cart];

    // Elimina el elemento en el índice especificado
    updatedCart.splice(index, 1);

    // Actualiza el estado del carrito
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <div className="scroll">
        <Header />
        <NavbarView />

        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginview />} />
          
          <Route path="/carrito" element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
          <Route path="/comics" element={<Comics addToCart={addToCart} cart={cart} />} />
          <Route
            path="/figuras"
            element={<Figures addToCart={addToCart} cart={cart} />}
          />
          <Route
            path="/funkos"
            element={<Funkos addToCart={addToCart} cart={cart} />}
          />
          <Route
            path="/posters"
            element={<Posters addToCart={addToCart} />}
          />
          <Route
            path="/shirts"
            element={<Shirts addToCart={addToCart} />}
          />
        </Routes>
      </div>
        </div>
        <Footer />
   
      
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
