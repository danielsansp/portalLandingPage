import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { images } from '../../constants';

import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
  <div>
    <h2 className="slike-title">Hamburguesas</h2>
    <Slider {...settings} >
      <div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
    </Slider>
  </div>
)};
export default Carousel;

/* const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  // eslint-disable-next-line implicit-arrow-linebreak
  }; */
