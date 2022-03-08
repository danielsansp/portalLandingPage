import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Cll 50 cr29 esquina</p>
        <p className="p__opensans">304 659 55 22</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.transparentLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Hamburguesa artesanal echa con amor&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario Laboral</h1>
        <p className="p__opensans">Miercoles a Lunes:</p>
        <p className="p__opensans">04:00 pm - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Portal St. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
