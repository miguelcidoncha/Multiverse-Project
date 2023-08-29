// import React from 'react';

// const Registro = () => {
//     return (
//       <div>
       
//        <h1>Registro </h1>
//       </div>
//     );
//   };
  
//   export default Registro;





import CardsHandler from '../../Handler/Cardshandler';
import '../Registro/Registro.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Registro() {
  const [cardCustomer, setCardCustomer] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); // Estado para la imagen seleccionada

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await CardsHandler.loadCards();
    setCardCustomer(data);
  };

  const handlerAdd = async () => {
    try {
      const formData = new FormData();
      formData.append('Foto', selectedFile);
      formData.append('Description', 'Nueva descripción');
      formData.append('Precio', 'Nuevo precio');
      formData.append('Tipo', 'Nuevo tipo');

      const response = await axios.post('http://localhost:3000/Cards', formData);
      const addedCardCustomer = response.data;
      setCardCustomer([...cardCustomer, addedCardCustomer]);
      setSelectedFile(null); // Reiniciar la selección de archivo
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpdateImage = async (id) => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('Foto', selectedFile);

        const response = await axios.patch(`http://localhost:3000/Cards/${id}`, formData);
        const updatedCardCustomer = response.data;
        const updatedCards = cardCustomer.map(card => {
          if (card.id === id) {
            return updatedCardCustomer;
          }
          return card;
        });
        setCardCustomer(updatedCards);
        setSelectedFile(null); // Reiniciar la selección de archivo
      } catch (error) {
        console.error('Error al actualizar imagen:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Cards/${id}`);
      const updatedCardCustomer = cardCustomer.filter((item) => item.id !== id);
      setCardCustomer(updatedCardCustomer);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  return (
    <main id="background">
      <div id="art-customer-container">
        {/* Resto del código para mostrar las cards */}
      </div>
      <div className="add-card-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
        />
        <button className="add-button" onClick={handlerAdd}>
          Agregar Nueva Card
        </button>
      </div>
      <div className="update-image-form">
        <h3>Modificar Imagen</h3>
        <select onChange={(e) => setSelectedFile(e.target.value)}>
          <option value={null}>Seleccionar Imagen</option>
          {cardCustomer.map(card => (
            <option key={card.id} value={card.Foto}>
              {card.Description}
            </option>
          ))}
        </select>
        <button className="update-button" onClick={() => handleUpdateImage(selectedFile)}>
          Actualizar Imagen
        </button>
      </div>
    </main>
  );
}
