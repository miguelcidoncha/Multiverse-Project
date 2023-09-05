import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comics = ({ addToCart }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Cómic" desde tu API.
    axios.get('http://localhost:3000/products?type=Comic')
      .then((response) => {
        setComics(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Cómics:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>Cómics</h1>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {comics.map((comic) => (
          <div key={comic.id} className="col">
            <div className="card mb-3">
              <img src={comic.image} alt={comic.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title">{comic.type}</h5>
                <p className="card-text"><strong>Nombre:</strong> {comic.name}</p>
                <p className="card-text"><strong>Precio:</strong> ${comic.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(comic)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comics;




