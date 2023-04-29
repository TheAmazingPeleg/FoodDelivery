import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';

function EditProduct() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? `Product ${params.id} Edit` : navigate('/')}
    </div>
  );
}
export default EditProduct;
