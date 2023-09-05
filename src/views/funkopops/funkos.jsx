import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Funkos = ({ addToCart }) => {
  const [funkos, setFunkos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Funko" desde tu API.
    axios.get('http://localhost:3000/products?type=Funko')
      .then((response) => {
        setFunkos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Funkos:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>Funko Pops</h1>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {funkos.map((funko) => (
          <div key={funko.id} className="col">
            <div className="card mb-3">
              <img src={funko.image} alt={funko.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title">{funko.type}</h5>
                <p className="card-text"><strong>Nombre:</strong> {funko.name}</p>
                <p className="card-text"><strong>Precio:</strong> ${funko.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(funko)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funkos;
