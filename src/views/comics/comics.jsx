import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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


  const [likedProduct, setLikedProduct] = useState(
    comics.map(() => false)
  );

  const handleLikeClick = (idx) => {
    const updatedLikedProduct = [...likedProduct];
    updatedLikedProduct[idx] = !updatedLikedProduct[idx];
    setLikedProduct(updatedLikedProduct);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {comics.map((comic, idx) => (
          <div key={comic.id} className="col">
            <div className="card mb-3">
              <img src={comic.image} alt={comic.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title text-center">{comic.type}</h5>
                <p className="card-text text-center"> {comic.name}</p>
                <p className="card-text text-center"> {comic.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(comic)}>Añadir al carrito</button>
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

export default Comics;




