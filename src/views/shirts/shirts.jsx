import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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

  const [likedProduct, setLikedProduct] = useState(
    camisetas.map(() => false)
  );

  const handleLikeClick = (idx) => {
    const updatedLikedProduct = [...likedProduct];
    updatedLikedProduct[idx] = !updatedLikedProduct[idx];
    setLikedProduct(updatedLikedProduct);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {camisetas.map((camiseta, idx) => (
          <div key={camiseta.id} className="col">
            <div className="card mb-3">
              <img src={camiseta.image} alt={camiseta.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title text-center">{camiseta.type}</h5>
                <p className="card-text text-center">{camiseta.name}</p>
                <p className="card-text text-center"> {camiseta.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-primary" onClick={() => handleAddToCart(camiseta)}>Añadir al carrito</button>
                <button
                    className="btn btn-link"
                    style={{
                      color: likedProduct[idx] ? 'red' : 'white',
                    }}
                    onClick={() => handleLikeClick(idx)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camisetas;

