import React from 'react';

import { SubHeading, WhatsAppButton } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Escoge nuestra nueva hamburguesa" /> */}
      <h1 className="app__header-h1">Hamburguesa Norteña</h1>
      <p className="p__opensans">Nuestra Hamburguesa Norteña, combina el gusto mexicano con los secretos de la comida Colombiana, para brindarte equilibrio en textura y sabor </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.portalBurger} alt="header_img" />
    </div>
    <div><WhatsAppButton /></div>
  </div>
);

export default Header;
