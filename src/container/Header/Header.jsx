import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Escoge nuestra nueva hamburguesa" />
      <h1 className="app__header-h1">Hamburguesa Nostreña</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Nuestra Hamburguesa Norteña, combina el gusto mexicano con los secretos de la comida Colombiana, para brindarte equilibrio en textura y sabor </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.nortenaBurger} alt="header_img" />
    </div>
  </div>
);

export default Header;
