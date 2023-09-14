// import React from 'react';


// const Carrito = () => {
//   return (
//     <div>
     
//       <h1>Carrito</h1>
      
//     </div>
//   );
// };

// export default Carrito;






import './Carrito.css';
import React, { useState } from 'react';


const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(nuevoCarrito);
  };

  const calcularPrecioTotal = () => {
    const total = carrito.reduce((acumulador, producto) => {
      return acumulador + producto.precio;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Carrito de Compra</h1>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagen} alt={producto.nombre} width="50" />
              </td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>
                <button
                  className={styles.button} // Aplica la clase de estilo
                  onClick={() => eliminarDelCarrito(producto)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calcularPrecioTotal()}</p>
    </div>
  );
};

export default Carrito;




