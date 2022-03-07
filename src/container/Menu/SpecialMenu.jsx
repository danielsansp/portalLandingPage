import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menú que le gusta a tu paladar" />
      <h1 className="headtext__cormorant">Menú</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Hamburguesas</p>
        <div className="app__specialMenu_menu_items">
          {data.burgers.map((burgers, index) => (
            <MenuItem key={burgers.title + index} title={burgers.title} price={burgers.price} tags={burgers.tags} comboPrice={burgers.comboPrice} />
          ))}
        </div>
      </div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Sandwiches</p>
        <div className="app__specialMenu_menu_items">
          {data.sandwich.map((sandwich, index) => (
            <MenuItem key={sandwich.title + index} title={sandwich.title} price={sandwich.price} tags={sandwich.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Perros</p>
        <div className="app__specialMenu_menu_items">
          {data.perros.map((perros, index) => (
            <MenuItem key={perros.title + index} title={perros.title} price={perros.price} tags={perros.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Ver más</button>
    </div>
  </div>
);

export default SpecialMenu;
// import { data, images } from '../../constants';
