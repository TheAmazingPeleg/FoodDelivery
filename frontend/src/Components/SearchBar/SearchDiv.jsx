import React from 'react';
import './SearchDiv.styling.css';

function SearchDiv({ productsList, value }) {
  const filteredProducts = productsList.filter(
    (product) => product.name.toLowerCase().includes(value.toLowerCase()),
  ).slice(0, 5);
  return (
    <div className="SearchDiv">
      {filteredProducts.map((product) => (
        <div className="Product" key={product.id}>
          <img className="Product-image" alt="product" src={product.image} />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
}
export default SearchDiv;
