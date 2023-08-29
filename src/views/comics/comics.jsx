// import React from 'react';
import Cards from "../../components/Cards/Cards";


const products1 = [
  {
    title: 'Producto 1 Vista 1',
    imageSrc: 'imagen1.jpg',
    description: 'Descripción del producto 1...',
  },
  // ... otros productos para la vista 1
];

function View1() {
  return (
    <div>
      <h2>Vista 1</h2>
      <Cards products={products1} />
    </div>
  );
}

export default View1;
