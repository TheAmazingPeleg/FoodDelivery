import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../Components/AuthContext/AdminAuthContext';

function Orders() {
  const AdminAuth = useContext(AdminAuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {AdminAuth ? 'Orders List' : navigate('/')}
    </div>
  );
}
export default Orders;
