import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TextCarousel.css'

const TextCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000, // Velocidad de desplazamiento
    autoplaySpeed: 1000, // Tiempo de espera entre desplazamientos
    arrows: false, // Opcional: para ocultar las flechas de navegación
  };

  const textItems = [
    "Descubre nuestros Increibles productos Friki...!",
    "Te Diste cuenta que necesitabas todo..?",
    "Pues facil, ¡COMPRALO TODO !!!",
    // Agrega más textos aquí
  ];

  return (
<div className="text-carousel-container">
    <Slider {...settings}>
      {textItems.map((text, index) => (
        <div key={index} className="text-carousel-item">
          <p>{text}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default TextCarousel;