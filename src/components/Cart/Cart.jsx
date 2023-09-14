// import React from 'react';

// const Cart = ({ cart }) => {
//   const removeItemFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     // Aquí necesitas agregar la lógica para actualizar el carrito
//     // Puedes usar una función prop para hacerlo.
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <img src={item.image} alt={item.name} width="50" height="50" />
//               </td>
//               <td>{item.name}</td>
//               <td>{item.description}</td>
//               <td>{item.price}€</td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => removeItemFromCart(index)}
//                 >
//                 🗑️
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Cart;




import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const removeItemFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart); // Actualiza el estado del carrito
  };

  return (
    <div>
      <h2 className='shopping'>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.name} width="50" height="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}€</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItemFromCart(index)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
