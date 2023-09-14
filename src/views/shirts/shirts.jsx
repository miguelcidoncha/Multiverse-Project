// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../shirts/shirts.css'

// const Shirt = ({ addToCart }) => {
//   const [Shirt, setShirt] = useState([]);

//   useEffect(() => {
//     // Realiza una solicitud para obtener los productos de la categoría "Camiseta" desde tu API.
//     axios.get('http://localhost:3000/products?type=Shirt')
//       .then((response) => {
//         setShirt(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener Shirts:', error);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const [likedProduct, setLikedProduct] = useState(
//     Shirt.map(() => false)
//   );

//   const handleLikeClick = (idx) => {
//     const updatedLikedProduct = [...likedProduct];
//     updatedLikedProduct[idx] = !updatedLikedProduct[idx];
//     setLikedProduct(updatedLikedProduct);
//   };

//   return (
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-4 g-2">
//         {Shirt.map((Shirt, idx) => (
//           <div key={Shirt.id} className="col">
//             <div className="cardshirt m-3">
//               <img src={Shirt.image} alt={Shirt.type} className="imgshirt" />
//               <div className="card-body">
//                 <h5 className="card-title text-center">{Shirt.type}</h5>
//                 <p className="card-text text-center">{Shirt.name}</p>
//                 <p className="card-text text-center"> {Shirt.price}€</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                 <button className="btn btn-primary" onClick={() => handleAddToCart(Shirt)}>Add to Cart</button>
//                 <button
//                     className="btn btn-link"
//                     style={{
//                       color: likedProduct[idx] ? 'red' : 'white',
//                     }}
//                     onClick={() => handleLikeClick(idx)}
//                   >
//                     <FontAwesomeIcon icon={faHeart} />
//                   </button>
//                   </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shirt;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../shirts/shirts.css';

const Shirt = ({ addToCart }) => {
  const [shirts, setShirts] = useState([]);
  const [likedProduct, setLikedProduct] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Camiseta" desde tu API.
    axios.get('http://localhost:3000/products?type=Shirt')
      .then((response) => {
        setShirts(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Shirts:', error);
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
        {shirts.map((shirt, idx) => (
          <div key={shirt.id} className="col">
            <div className="cardshirt m-3">
              <img src={shirt.image} alt={shirt.type} className="imgshirt" />
              <div className="card-body">
                <h5 className="card-title text-center">{shirt.type}</h5>
                <p className="card-text text-center">{shirt.name}</p>
                <p className="card-text text-center"> {shirt.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
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

export default Shirt;


