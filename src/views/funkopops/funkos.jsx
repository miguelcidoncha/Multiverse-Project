import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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


  const [likedProduct, setLikedProduct] = useState(
    funkos.map(() => false)
  );

  const handleLikeClick = (idx) => {
    const updatedLikedProduct = [...likedProduct];
    updatedLikedProduct[idx] = !updatedLikedProduct[idx];
    setLikedProduct(updatedLikedProduct);
  };


  return (
    <div className="container">
      {/* <h1>Funko Pops</h1> */}
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {funkos.map((funko, idx) => (
          <div key={funko.id} className="col">
            <div className="card m-3">
              <img src={funko.image} alt={funko.type} className="card-img" />
              <div className="card-body">
                <h5 className="card-title text-center">{funko.type}</h5>
                <p className="card-text text-center"> {funko.name}</p>
                <p className="card-text text-center"> {funko.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(funko)}>Add to cart</button>
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

export default Funkos;
