import { React } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.styling.css';
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../../assets/Cart.png';

function Navbar({ productsList }) {
  const location = useLocation();
  return (
    <ol className="navbar-list">

      <li className="navbar-left">
        <Link to="/" className="navbar-list-item-anchor">Home</Link>
        <Link to="about-us" className="navbar-list-item-anchor">About Us</Link>
      </li>

      <li>
        <SearchBar productsList={productsList} placeholder="Search..." />
      </li>

      <li className="navbar-right">
        <Link to="/login">
          <button type="button" className="navbar-list-item-button">Login</button>
        </Link>
        <Link to="/sign-up">
          <button type="button" className="navbar-list-item-button">Sign Up</button>
        </Link>
        <Link to="/cart">
          {location.pathname === '/' ? <img className="navbar-list-item-image" src={Cart} alt="Cart Icon" /> : null}
        </Link>
      </li>

    </ol>
  );
}
export default Navbar;
