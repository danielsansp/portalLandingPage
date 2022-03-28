import React from 'react';

import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { images, data } from '../../constants';

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

const Carousel = (props) => {
  console.log(props.product)
  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
  <div className="slick-container">
    <h2 className="slick-title">{props.product}</h2>
    <Slider {...settings} >
    {[images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger].map((image, index) => (
            <div className="slick-slider"> 
              <div className="app__carousel-images_card" key={`gallery_image-${index + 1}`}>
                {/* {data.burgers.map(title, index =>{
                <h3 className="slick-product">{title}</h3>}
                )} */}
                <h3 className="slick-product">{data.burgers[index].title}</h3>
                <h4 className="slick-product-price">{data.burgers[index].price}</h4>
                <img src={image} alt="gallery_image " />
                  <div className="carousel_product_copy">{data.burgers[index].tags}</div>
                {/* <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
                  <BsInstagram className="Instagram_link" />
                </a> */}
              </div>
            </div>
          ))}
    </Slider>
  </div>
)};

export default Carousel;
/*
<Slider {...settings} >
    {[images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger].map((image, index) => (
            <div className="slick-slider"> 
              <div className="app__carousel-images_card" key={`gallery_image-${index + 1}`}>
                <h3 className="slick-product">Ranchera</h3>
                <img src={image} alt="gallery_image " />
                  <div className="carousel_product_copy">leyenda sobre producto</div>
                <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
                  <BsInstagram className="Instagram_link" />
                </a>
              </div>
            </div>
          ))}
    </Slider> */