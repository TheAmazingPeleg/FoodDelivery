import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDisplay from '../Components/MainPage/ProductDisplay';

function ViewProduct({ products }) {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {params.id ? <ProductDisplay proudctslist={products} /> : navigate('/')}
    </div>
  );
}
export default ViewProduct;
