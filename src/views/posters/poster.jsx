import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posters = ({ addToCart }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Poster" desde tu API.
    axios.get('http://localhost:3000/products?type=Poster')
      .then((response) => {
        setPosters(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Posters:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>Posters</h1>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {posters.map((poster) => (
          <div key={poster.id} className="col">
            <div className="card mb-3">
              <img src={poster.image} alt={poster.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title">{poster.type}</h5>
                <p className="card-text"><strong>Nombre:</strong> {poster.name}</p>
                <p className="card-text"><strong>Precio:</strong> ${poster.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(poster)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posters;



