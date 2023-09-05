// import React from 'react';


// const Carrito = () => {
//   return (
//     <div>
     
//       <h1>Carrito</h1>
      
//     </div>
//   );
// };

// export default Carrito;





import React, { useState } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  // Opcional: Puedes agregar un estado para el total del carrito.
  // const [total, setTotal] = useState(0);

  // Función para agregar un producto al carrito.
  const addToCart = (product) => {
    setCarrito([...carrito, product]);
    // Opcional: Actualizar el total del carrito.
    // setTotal(total + product.price);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {/* Renderiza la lista de productos en el carrito */}
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      {/* Opcional: Muestra el total del carrito */}
      {/* <p>Total: ${total}</p> */}
    </div>
  );
};

export default Carrito;



