import React from 'react';

function ProductDisplay({ products }) {
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}
export default ProductDisplay;
