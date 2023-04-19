import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';

function AddProduct() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {AdminAuth ? 'Add Product' : navigate('/')}
    </div>
  );
}
export default AddProduct;
