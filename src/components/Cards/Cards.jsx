// import React from 'react';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';


// function Cards() {
//     const cardsData = [
//         {
//             title: 'Venom',
//             description: "Póster Marvel Comics - Venom's Face (61cm x 91,5cm)",
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949895/Venom.jpg',
//         },
//         {
//             title: 'The Witcher',
//             description: 'Póster decorativo de The Witches 3 Wild Hunt, póster de pared e imagen artística impresa moderna para el dormitorio familiar, 12 x 18 pulgadas (30 x 45 cm)',
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692955148/The_Witcher_qqbxel.jpg',
//         },
//         {
//             title: 'Civil War',
//             description: 'Póster Marvel Captain America - Civil War Iron Man & Captain America (61cm x 91,5cm) + 2 Marcos Negros para póster con suspención',
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692962148/Civil_War_wxuewd.jpg',
//         },
//         {
//             title: 'The Dark Knight - Joker',
//             description: 'BATMAN "The Dark Knight/El Caballero Oscuro" Póster (68cm x 98cm)',
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049167/Joker_vfvilk.jpg',
//         },
//         {
//             title: 'The Marauders Map',
//             description: 'Grupo Erik ERIK - Pack Póster Harry Potter The Marauders Map con Colgador de Madera magnético, Negro, vertical (61x91.5 cm)',
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049369/HP_MAP_u2s2qc.jpg',
//         },
//         {
//             title: 'Guardians of the Galaxy',
//             description: 'Close Up Póster Marvel Guardians of The Galaxy Vol. 2 - Personajes (61cm x 91,5cm)',
//             image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049690/Guardians_of_the_Galaxy_sdtuzd.jpg',
//         },
          

//     ];

//     return (
//         <Row xs={1} md={2} className="g-4 justify-content-center">
//             {cardsData.map((card, idx) => (
//                 <Col key={idx} style={{ width: '200px'}}>
//                     <Card>
//                         <Card.Img variant="top" src={card.image} />
//                         <Card.Body style={{fontSize:'12px'}}>
//                             <Card.Title style={{fontSize:'15px'}} >{card.title}</Card.Title>
//                             <Card.Text style={{minHeight:'140px'}} >{card.description}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     );
// }

// export default Cards;

// --------------------------------------------------------------

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Cards() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Productos Novedades!</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Cards;

// -----------------------------------------------------------------------------------------

import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import './Cards.css'


function Cards() {

    const products = [
   
     {
          title: 'Funko',
          imageSrc: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326501/funko_guason-removebg-preview_ozmh6u.png',
          description: 'Descripción del producto 4...',
        },
        {
            title: 'Funko',
            imageSrc: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326501/funko_superman-removebg-preview_yu2nkl.png',
            description: 'Descripción del producto 1...',
          },
          {
            title: 'Funko',
            imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693303883/FunkoSpiderman_mhetsb.png',
            description: 'Descripción del producto 1...',
          },
        // {
        //   title: 'Batman',
        //   imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049369/HP_MAP_u2s2qc.jpg',
        //   description: 'Descripción del producto 1...',
        // },
        // {
        //   title: 'Invincible',
        //   imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible.jpg',
        //   description: 'Descripción del producto 2...',
        // },
        // {
        //   title: 'Huason',
        //   imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049167/Joker_vfvilk.jpg',
        //   description: 'Descripción del producto 3...',
        // },
   
          ];

    const [likedProducts, setLikedProducts] = useState(
        products.map(() => false)
      );// Crear un estado para rastrear los "me gusta" de cada producto individual.

      const handleLikeClick = (idx) => {
        const updatedLikedProducts = [...likedProducts];
        updatedLikedProducts[idx] = !updatedLikedProducts[idx];
        setLikedProducts(updatedLikedProducts);
      };// Manejar clics en el botón "Me Gusta" de un producto específico.
    



  return (
    <Container className="d-flex justify-content-center">
    <Row xs={1} md={3} className="g-4">
      {products.map((product, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img src={product.imageSrc} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button className='button-buy' variant="primary">Buy Now</Button>{' '}
              <Button className='button-like' 
                  variant="link"
                  style={{
                    color: likedProducts[idx] ? 'red' : 'white', // Cambiar colores aquí
                                }}
                  onClick={() => handleLikeClick(idx)}
            
                >
  <FontAwesomeIcon icon={faHeart} />
</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default Cards;




// function Cards2() {

//     const products = [
   
//         {
//           title: 'Batman',
//           imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692962030/Batman_njnthf.jpg',
//           description: 'Descripción del producto 1...',
//         },
//         {
//           title: 'Invincible',
//           imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible.jpg',
//           description: 'Descripción del producto 2...',
//         },
//         {
//           title: 'Huason',
//           imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049167/Joker_vfvilk.jpg',
//           description: 'Descripción del producto 3...',
//         },
   
//           ];

//     const [likedProducts, setLikedProducts] = useState(
//         products.map(() => false)
//       );// Crear un estado para rastrear los "me gusta" de cada producto individual.

//       const handleLikeClick = (idx) => {
//         const updatedLikedProducts = [...likedProducts];
//         updatedLikedProducts[idx] = !updatedLikedProducts[idx];
//         setLikedProducts(updatedLikedProducts);
//       };// Manejar clics en el botón "Me Gusta" de un producto específico.
    



//   return (
//     <Container className="d-flex justify-content-center">
//     <Row xs={1} md={3} className="g-4">
//       {products.map((product, idx) => (
//         <Col key={idx}>
//           <Card style={{ width: '220px' }}>
//             <Card.Img variant="top" src={product.imageSrc} />
//             <Card.Body>
//               <Card.Title>{product.title}</Card.Title>
//               <Card.Text>{product.description}</Card.Text>
//               <Button variant="primary">Buy Now</Button>{' '}
//               <Button
//                   variant="link"
//                   style={{
//                     color: likedProducts[idx] ? 'red' : 'blue', // Cambiar colores aquí
//                   }}
//                   onClick={() => handleLikeClick(idx)}
            
//                 >
//   <FontAwesomeIcon icon={faHeart} />
// </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </Container>
//   );
// }

// export default Cards2;

