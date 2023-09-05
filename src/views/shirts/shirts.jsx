import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Camisetas = ({ addToCart }) => {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Camiseta" desde tu API.
    axios.get('http://localhost:3000/products?type=Camiseta')
      .then((response) => {
        setCamisetas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener camisetas:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>Camisetas</h1>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {camisetas.map((camiseta) => (
          <div key={camiseta.id} className="col">
            <div className="card mb-3">
              <img src={camiseta.image} alt={camiseta.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title">{camiseta.type}</h5>
                <p className="card-text"><strong>Nombre:</strong> {camiseta.name}</p>
                <p className="card-text"><strong>Precio:</strong> ${camiseta.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(camiseta)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camisetas;

