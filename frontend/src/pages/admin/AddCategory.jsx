import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAuthContext from '../../Components/AuthContext';

function AddCategory() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {AdminAuth ? 'Add Category' : navigate('/')}
    </div>
  );
}
export default AddCategory;
