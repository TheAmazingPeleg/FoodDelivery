import React from 'react';
import './Navbar.styling.css';
import SearchBar from '../SearchBar/SearchBar';

function Navbar({ productsList }) {
  return (
    <ol className="navbar-list">

      <li className="navbar-left">
        <a className="navbar-list-item-anchor" href="/">Home</a>
        <a className="navbar-list-item-anchor" href="youtube.com">About Us</a>
      </li>

      <li>
        <SearchBar productsList={productsList} placeholder="Search..." />
      </li>

      <li className="navbar-right">
        <button type="button" className="navbar-list-item-button">Login</button>
        <button type="button" className="navbar-list-item-button">Sign Up</button>
        <a href="example.com">
          <img className="navbar-list-item-image" src="https://github.com/ColmanDevClub.png" alt="Colman Dev Club logo" />
        </a>
      </li>

    </ol>
  );
}
export default Navbar;
