import React from 'react';

import Slider from 'react-slick';

import { images } from '../../constants';

import './Carousel.css';

const Carousel = () => (
  <div>
    <h2> Single Item</h2>
    <Slider dots="false" infinite="true" speed="500" slidesToShow="1" slidesToScroll="1">
      <div>
        <h3>3</h3>
      </div>
      <div>
        {images.rancheraBurger}
      </div>
      <div>
        {images.rancheraBurger}
      </div>
      <div>
        {images.rancheraBurger}
      </div>
      <div>
        {images.rancheraBurger}
      </div>
      <div>
        {images.rancheraBurger}
      </div>
    </Slider>
  </div>
);
export default Carousel;

/* const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  // eslint-disable-next-line implicit-arrow-linebreak
  }; */
