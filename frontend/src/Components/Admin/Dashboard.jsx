import React from 'react';
import Nav from './Nav';
import Stat from './Stat';

function Dashboard() {
  return (
    <div className="admin-container">
      <Nav />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <Stat name="New Orders" value="0" bgColorType="1" />
        <Stat name="Orders Approved" value="0" bgColorType="2" />
        <Stat name="Cooking Orders" value="0" bgColorType="3" />
        <Stat name="On the Way" value="0" bgColorType="4" />
        <Stat name="Delivered" value="0" bgColorType="5" />
        <Stat name="Categories" value="3" bgColorType="6" />
        <Stat name="Products" value="14" bgColorType="1" />
      </div>
    </div>
  );
}
export default Dashboard;
