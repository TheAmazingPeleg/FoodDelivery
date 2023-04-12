import React from 'react';
import './Navbar.styling.css';

function Navbar({ children }) {
  return (
    <ol className="navbar-list">

      <li className="navbar-left">
        <a className="navbar-list-item-anchor" href="/">Home</a>
        <a className="navbar-list-item-anchor" href="youtube.com">About Us</a>
      </li>

      <div className="navbar-middle">
        <li className="navbar-list-item">
          {React.Children.toArray(children).find((child) => child.type.name === 'SearchBar')}
        </li>
      </div>

      <li className="navbar-right">
        {/* temporary */}
        <button type="button" className="navbar-list-item-button">Login</button>
        <button type="button" className="navbar-list-item-button">Sign Up</button>
        <a href="example.com">
          <img className="navbar-list-item-image" src="https://github.com/ColmanDevClub.png" alt="Colman Dev Club logo" />
        </a>
        {/* temporary */}
      </li>

    </ol>
  );
}
export default Navbar;
