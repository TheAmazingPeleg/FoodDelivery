import { React, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';

function Category() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {AdminAuth ? params.id : navigate('/')}
    </div>
  );
}
export default Category;
