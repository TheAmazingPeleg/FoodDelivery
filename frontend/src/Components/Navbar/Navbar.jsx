import React from 'react';
import './Navbar.styling.css';

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ol className="navbar-list">

        <li className="navbar-list-item">
          <a className="navbar-list-item-anchor" href="/">Home</a>
        </li>

        <li className="navbar-list-item">
          <a className="navbar-list-item-anchor" href="youtube.com">About Us</a>
        </li>

        <li className="navbar-right">
          {/* temporary */}
          <button type="button" className="navbar-list-item-button">Login</button>
          <button type="button" className="navbar-list-item-button">Sign Up</button>
          <a href="example.com">
            <img className="navbar-list-item-image" src="https://github.com/ColmanDevClub.png" alt="Colman Dev Club logo" />
          </a>
          {/* temporary */}
          {React.Children.toArray(children).find((child) => child.type.displayName === 'LoginButton')}
        </li>

        <div className="navbar-middle">
          <li className="navbar-list-item">
            {React.Children.toArray(children).find((child) => child.type.displayName === 'SearchBar')}
          </li>
        </div>

      </ol>
    </nav>
  );
}
export default Navbar;
