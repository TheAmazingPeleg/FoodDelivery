import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAuthContext from '../../Components/AuthContext';

function Categories() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {AdminAuth ? 'Categories' : navigate('/')}
    </div>
  );
}
export default Categories;
