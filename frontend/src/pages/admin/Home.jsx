import React from 'react';
import AdminLogin from '../../Components/Admin/AdminLogin';
import Dashboard from '../../Components/Admin/Dashboard';

function AdminHome() {
  const authToken = true;

  return (
    <div>
      {authToken ? <Dashboard /> : <AdminLogin />}
    </div>
  );
}
export default AdminHome;
