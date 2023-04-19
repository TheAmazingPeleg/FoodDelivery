import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';

function EditCategory() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? `Category ${params.id} Edit` : navigate('/')}
    </div>
  );
}
export default EditCategory;
