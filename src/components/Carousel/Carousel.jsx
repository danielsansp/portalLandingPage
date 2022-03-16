import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { images } from '../../constants';

import './Carousel.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",
               position:"absolute",left:"1rem", bottom:"0", height:"1.5rem",
               width:"3rem",zIndex:"3"}}
      onClick={onClick}
    > <BsArrowLeftShort /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
      style={{ ...style, display: "block", background: "red",
               position:"absolute",right:"1rem", bottom:"0", height:"1.5rem",
               width:"3rem",zIndex:"3"}}
      onClick={onClick}
    > <BsArrowRightShort /></div>
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

{/* <div>
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
      </div> */}