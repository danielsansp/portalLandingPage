import React from 'react';

import { BsInstagram, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { images } from '../../constants';

import './Carousel.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    > <BsFillArrowLeftSquareFill className="slick-left-arrow" /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsFillArrowRightSquareFill className="slick-right-arrow"  />
    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
  <div className="slick-container">
    <h2 className="slick-title">Hamburguesas</h2>
    <Slider {...settings} >
    {[images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <h3 className="slick-product">Ranchera</h3>
              <img src={image} alt="gallery_image" />
              <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
    </Slider>
  </div>
)};
export default Carousel;
