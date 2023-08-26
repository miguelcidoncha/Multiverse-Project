import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function Cards() {
    const cardsData = [
        {
            title: 'Venom',
            description: "Póster Marvel Comics - Venom's Face (61cm x 91,5cm)",
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949895/Venom.jpg',
        },
        {
            title: 'The Witcher',
            description: 'Póster decorativo de The Witches 3 Wild Hunt, póster de pared e imagen artística impresa moderna para el dormitorio familiar, 12 x 18 pulgadas (30 x 45 cm)',
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692955148/The_Witcher_qqbxel.jpg',
        },
        {
            title: 'Civil War',
            description: 'Póster Marvel Captain America - Civil War Iron Man & Captain America (61cm x 91,5cm) + 2 Marcos Negros para póster con suspención',
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1692962148/Civil_War_wxuewd.jpg',
        },
        {
            title: 'The Dark Knight - Joker',
            description: 'BATMAN "The Dark Knight/El Caballero Oscuro" Póster (68cm x 98cm)',
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049167/Joker_vfvilk.jpg',
        },
        {
            title: 'The Marauders Map',
            description: 'Grupo Erik ERIK - Pack Póster Harry Potter The Marauders Map con Colgador de Madera magnético, Negro, vertical (61x91.5 cm)',
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049369/HP_MAP_u2s2qc.jpg',
        },
        {
            title: 'Guardians of the Galaxy',
            description: 'Close Up Póster Marvel Guardians of The Galaxy Vol. 2 - Personajes (61cm x 91,5cm)',
            image: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693049690/Guardians_of_the_Galaxy_sdtuzd.jpg',
        },
          

    ];

    return (
        <Row xs={1} md={2} className="g-4 justify-content-center">
            {cardsData.map((card, idx) => (
                <Col key={idx} style={{ width: '200px', height:'200px'}}>
                    <Card>
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Cards;
