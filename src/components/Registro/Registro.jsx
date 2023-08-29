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
// import "../WheelOfDoom/WheelOfDoom.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Registro() {
  const [cardCustomer, setcardCustomer] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await CardsHandler.loadCards();
    setcardCustomer(data);
  };
  const handlerAdd = async () => {
    try {
      // Datos del nuevo elemento a agregar (reemplaza con los valores adecuados)
      const newCardCustomer = {
        Foto: 'https://cdn.pixabay.com/photo/2016/04/01/09/34/american-1299445_640.png',
        Description: 'Escultura 2',
        Precio: '2000',
        Tipo: 'Escultura',
      };
      // Realizar la solicitud POST para agregar el elemento a la base de datos (API)
      const response = await axios.post('http://localhost:3000/Cards', newCardCustomer);
      // Obtener el nuevo elemento con el ID generado automáticamente por el servidor
      const addedCardCustomer = response.data;
      // Actualizar el estado local para reflejar los cambios
      setcardCustomer([...cardCustomer, addedCardCustomer]);
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Cards/${id}`);
      const updatedCardCustomer = cardCustomer.filter((item) => item.id !== id);
      setcardCustomer(updatedCardCustomer);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };
  return (
    <main id="background">
      <div id="art-customer-container">
        {Array.from({ length: Math.ceil(cardCustomer.length / 5) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="art-customer-group">
              {cardCustomer
                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                .map((item) => (
                  <div key={item.id} className="art-customer">
                    <div>
                    <img src={item.Foto} alt="Imagen de arte" width={250} height={315}/>
                    </div>
                    <h2>{item.Description}</h2>
                    <p><strong>Precio:</strong> {item.Precio}</p>
                    <p><strong>Tipo:</strong> {item.Tipo}</p>
                    <div className="button-container">
                    <button className="delete-button" onClick={() => handleDelete(item.id)}>
                        <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsJK7RvQtvRfpAW04KrAo7wBvW_7W9qhUqIgC8fYgtfjrSLRC5aXDjuwXRirrWxllkak&usqp=CAU" alt="Eliminar" />
                    </button>
                    <button className="add-button" onClick={handlerAdd}>
                    <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj4CtfwLAx0n7ZfQWG08dsI7B6tRiYlabiUteYJU&s" alt="Agregar" />
                    </button>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </main>
  );
}