import React from 'react';
import Stat from './Stat';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Stat name="New Orders" value="0" bgColor="1" />
      <Stat name="Orders Approved" value="0" bgColor="2" />
      <Stat name="Cooking Orders" value="0" bgColor="3" />
      <Stat name="On the Way" value="0" bgColor="4" />
      <Stat name="Delivered" value="0" bgColor="5" />
      <Stat name="Categories" value="3" bgColor="6" />
      <Stat name="Products" value="14" bgColor="1" />
    </div>
  );
}
export default Dashboard;
