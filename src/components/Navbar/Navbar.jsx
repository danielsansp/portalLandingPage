import React from 'react';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app-navbar">
      <div className="">
        <img src={images.transparentLogo} alt="app__logo" className="app-navbar-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#burger">Hamburguesa</a></li>
        <li className="p__opensans"><a href="#perros">Perros</a></li>
        <li className="p__opensans"><a href="#sandwich">Sandwich</a></li>
        <li className="p__opensans"><a href="#home">Carnes</a></li>
        <li className="p__opensans"><a href="#home">Bebidas</a></li>
      </ul>
      
      {/* { /* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>  */ }
      {/* <div className="app__navbar-smallscreen"> */}
        {/* <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} /> */}
        {/* {toggleMenu && ( */}
          {/* <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={"/"} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={"/"}>Home</a></li>
              <li><a href="#menu" onClick={"/"}>Menu</a></li>
              <li><a href="#about" onClick={"/"}>Nosotros</a></li>
              <li><a href="#awards" onClick={"/"}>Consejos</a></li>
              <li><a href="#contact" onClick={"/"}>Contactanos</a></li>
            </ul>
          </div> */}
        {/* )} */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
