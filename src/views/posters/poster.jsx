// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../posters/poster.css'

// const Posters = ({ addToCart }) => {
//   const [posters, setPosters] = useState([]);

//   useEffect(() => {
//     // Realiza una solicitud para obtener los productos de la categoría "Poster" desde tu API.
//     axios.get('http://localhost:3000/products?type=Poster')
//       .then((response) => {
//         setPosters(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener Posters:', error);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const [likedProduct, setLikedProduct] = useState(
//     posters.map(() => false)
//   );

//   const handleLikeClick = (idx) => {
//     const updatedLikedProduct = [...likedProduct];
//     updatedLikedProduct[idx] = !updatedLikedProduct[idx];
//     setLikedProduct(updatedLikedProduct);
//   };

//   return (
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-4 g-2">
//         {posters.map((poster, idx) => (
//           <div key={poster.id} className="col">
//             <div className="card mb-3">
//               <img src={poster.image} alt={poster.type} className="card-img-top image-card" />
//               <div className="card-body">
//                 <h5 className="card-title text-center">{poster.type}</h5>
//                 <p className="card-text text-center">{poster.name}</p>
//                 <p className="card-text text-center">{poster.price}€</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(poster)}>Add to cart</button>
//                   <button
//                     className="btn btn-link"
//                     style={{
//                       color: likedProduct[idx] ? 'red' : 'white',
//                     }}
//                     onClick={() => handleLikeClick(idx)}
//                   >
//                     <FontAwesomeIcon icon={faHeart} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posters;


// _______________________________________________________________________________________________________________




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../posters/poster.css';

const Posters = ({ addToCart }) => {
  const [posters, setPosters] = useState([]);
  const [likedProduct, setLikedProduct] = useState(posters.map(() => false));

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

  const handleLikeClick = (idx) => {
    const updatedLikedProduct = [...likedProduct];
    updatedLikedProduct[idx] = !updatedLikedProduct[idx];
    setLikedProduct(updatedLikedProduct);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {posters.map((poster, idx) => (
          <div key={poster.id} className="col">
            <div className="card mb-3">
              <img src={poster.image} alt={poster.type} className="card-img-top image-card" />
              <div className="card-body">
                <h5 className="card-title text-center">{poster.type}</h5>
                <p className="card-text text-center">{poster.name}</p>
                <p className="card-text text-center">{poster.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(poster)}>Add to cart</button>
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

export default Posters;

