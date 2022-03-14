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
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <div className="slick-container">
    <h2 className="slick-title">Hamburguesas</h2>
    <Slider {...settings} >
      <div>
        <div className="product-title">
          <h4>Hamburguesa Ranchera</h4> 
        </div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <div className="product-title">
          <h4>Hamburguesa Portal</h4> 
        </div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
        <div className="product-title">
          <h4>Hamburguesa Norteña</h4> 
        </div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
         <div className="product-title">
          <h4>Hamburguesa Pollo</h4> 
        </div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
      <div>
         <div className="product-title">
          <h4>Hamburguesa Junior</h4> 
        </div>
        <img src={images.rancheraBurger} alt="Hamburguesa Portal" />
      </div>
    </Slider>
  </div>
)};
export default Carousel;

