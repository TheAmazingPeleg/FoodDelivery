import { React, useContext } from 'react';
import AdminLogin from '../../Components/Admin/AdminLogin';
import Dashboard from '../../Components/Admin/Dashboard';
import AdminAuthContext from '../../Components/AuthContext';

function AdminHome() {
  const AdminAuth = useContext(AdminAuthContext);
  return (
    <div>
      {AdminAuth ? <Dashboard /> : <AdminLogin />}
    </div>
  );
}
export default AdminHome;
