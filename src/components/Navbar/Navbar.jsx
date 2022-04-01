import React from 'react';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="app-navbar" id="navbar">
      <div className="">
        <img src={images.transparentLogo} alt="app__logo" className="app-navbar-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#burger">Hamburguesa</a></li>
        <li className="p__opensans"><a href="#perros">Perros</a></li>
        <li className="p__opensans"><a href="#sandwich">Sandwich</a></li>
        {/* <li className="p__opensans"><a href="#home">Carnes</a></li>
        <li className="p__opensans"><a href="#home">Bebidas</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
