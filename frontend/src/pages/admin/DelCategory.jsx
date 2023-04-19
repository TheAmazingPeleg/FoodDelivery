import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminAuthContext from '../../Components/AuthContext';

function DelCategory() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? `Category ${params.id} Deleted` : navigate('/')}
    </div>
  );
}
export default DelCategory;
