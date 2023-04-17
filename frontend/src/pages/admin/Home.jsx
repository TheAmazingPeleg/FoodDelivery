import React from 'react';
import AdminLogin from '../../Components/Admin/AdminLogin';
import Dashboard from '../../Components/Admin/Dashboard';

function Home() {
  const authToken = false;

  return (
    <div>
      {authToken ? <AdminLogin /> : <Dashboard />}
    </div>
  );
}
export default Home;
