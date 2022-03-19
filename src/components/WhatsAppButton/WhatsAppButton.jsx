/* WhatsAppButton UI-component */
import React from 'react';

import { images } from '../../constants';
import './whatsapp.css';

const WhatsAppButton = () => (
  <a
    // eslint-disable-next-line max-len
    href="https://api.whatsapp.com/send?phone=573046595522&text=Hola,%20quiero%20hacer%20un%20pedido&source=&data=&app_absent="
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp_float"
  >
    <img src={images.logoWhatsApp} alt="Empleapp whatsapp info" className="whatsapp-icon" />
  </a>
);

export default WhatsAppButton;
