import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Cll 50 cr29 esquina</p>
        <a href="https://wa.me/573046595522?text=Hola,%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer noopener" className="Instagram_link">
          <img src={images.logoWhatsApp} className="spoon__img" style={{ marginTop: 15 }} />
          <p className="p__opensans contactCall">304 659 55 22</p>
        </a>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.transparentLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Hamburguesa artesanal echa con amor&quot;</p>
        <img src={images.whiteBurgerIcon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
            <FiFacebook />
          </a>
          {/* <FiTwitter /> */}
          <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
            <FiInstagram />
          </a>
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
