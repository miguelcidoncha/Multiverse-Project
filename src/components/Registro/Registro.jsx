import CardsHandler from '../../Handler/Cardshandler';
import './registro.css';
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
     
      const newCardCustomer = {
        Foto: 'https://res.cloudinary.com/dit2zhtwz/image/upload/v1693322349/funko_batman-removebg-preview_eizguz.png',
        Description: 'Funko',
        Precio: '16',
        Tipo: 'Funko Pops',
      };
      
      const response = await axios.post('http://localhost:3000/Cards', newCardCustomer);
      
      const addedCardCustomer = response.data;
      
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
      <div id="card-customer-container">
        {Array.from({ length: Math.ceil(cardCustomer.length / 5) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="card-customer-group">
              {cardCustomer
                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                .map((item) => (
                  <div key={item.id} className="card-customer">
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