import React from 'react';

function Nav() {
  return (
    <div className="admin-nav">
      <ul>
        <li><a href="dashboard">Dashboard</a></li>
        <li><a href="categories">Categories</a></li>
        <li><a href="addCategory">Add Category</a></li>
        <li><a href="addProduct">Add Product</a></li>
        <hr />
        <li><a href="logout">Logout</a></li>
      </ul>
    </div>
  );
}
export default Nav;
