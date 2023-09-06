import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Figures = ({ addToCart }) => {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Figura" desde tu API.
    axios.get('http://localhost:3000/products?type=Figura')
      .then((response) => {
        setFigures(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Figuras:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>Figuras</h1>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {figures.map((figure) => (
          <div key={figure.id} className="col">
            <div className="card mb-3">
              <img src={figure.image} alt={figure.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title">{figure.type}</h5>
                <p className="card-text"><strong>Nombre:</strong> {figure.name}</p>
                <p className="card-text"><strong>Precio:</strong> ${figure.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(figure)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figures;
