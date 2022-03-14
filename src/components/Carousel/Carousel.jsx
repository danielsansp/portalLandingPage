import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { images } from '../../constants';

import './Carousel.css';

/*function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}*/

// nextArrow: <SampleNextArrow />,
// prevArrow: <SamplePrevArrow />

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
  <div className="slick-container">
    <h2 className="slick-title">Hamburguesas</h2>
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

