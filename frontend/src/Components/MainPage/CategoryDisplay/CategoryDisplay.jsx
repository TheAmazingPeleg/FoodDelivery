import React, { useState } from 'react';
import products from '../ProductData';
import './CategoryDisplay.styling.css';

function CategoryDisplay() {
  const [chosenCategory, SetChosenCategory] = useState('');

  const filteredProducts = chosenCategory
    ? products.filter((product) => product.category === chosenCategory)
    : products;

  return (
    <div>
      <select value={chosenCategory} onChange={(event) => SetChosenCategory(event.target.value)}>
        <option value="">All Categories</option>
        <option value="category 1">Category 1</option>
        <option value="category 2">Category 2</option>
        <option value="category 3">Category 3</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDisplay;
