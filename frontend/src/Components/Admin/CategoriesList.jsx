import React from 'react';
import Nav from './Nav';

function CategoriesList() {
  return (
    <div className="admin-container">
      <Nav />
      <div>
        <h1>Categories List</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Products</th>
            <th>Action</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default CategoriesList;
