import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminAuthContext from '../../Components/AuthContext';

function DelProduct() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? `Product ${params.id} Deleted` : navigate('/')}
    </div>
  );
}
export default DelProduct;
