import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminAuthContext from '../../Components/AuthContext';

function DelOrder() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? `Order ${params.id} Deleted` : navigate('/')}
    </div>
  );
}
export default DelOrder;
