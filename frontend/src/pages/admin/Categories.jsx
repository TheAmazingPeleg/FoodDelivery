import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';
import CategoriesList from '../../Components/Admin/CategoriesList';

function Categories() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {AdminAuth ? <CategoriesList /> : navigate('/')}
    </div>
  );
}
export default Categories;
