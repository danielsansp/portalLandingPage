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
  let imagesArray=[];
  let productArray=[];
  let priceArray=[];
  let copyArray=[];
   
  let carouselImage=props.product;
  
    if(carouselImage==='Hamburguesas'){
      imagesArray = [images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger]
      productArray = data.burgers.map(data => data= data.title);
      priceArray = data.burgers.map(data => data= data.price);
      copyArray = data.burgers.map(data => data= data.tags);
      //console.log(`data array= ${priceArray}`)         
    } else if (carouselImage==='Perros'){
        imagesArray = [images.perroBurger, images.rancheraBurger, images.rancheraBurger]
        productArray = data.perros.map(data => data= data.title);
        priceArray = data.perros.map(data => data= data.price);
        copyArray = data.perros.map(data => data= data.tags);
        //console.log(`data array= ${priceArray}`)         
      } else{
          imagesArray = [images.rancheraBurger, images.rancheraBurger, images.rancheraBurger]
          productArray = data.sandwich.map(data => data= data.title);
          priceArray = data.sandwich.map(data => data= data.price);
          copyArray = data.sandwich.map(data => data= data.tags);
          //console.log(`data array= ${priceArray}`)         
        }

    return (
  <div className="slick-container" id={props.carouselId}>
    <div>
      <h2 className="slick-title">{props.product} </h2>
    </div>
    <div>

    <Slider {...settings} >
    {imagesArray.map((image, index) => (
            
            <div className="slick-slider"> 
              <div className="app__carousel-images_card" key={`gallery_image-${index + 1}`}>
                <h3 className="slick-product">{productArray[index]}</h3>
                <h4 className="slick-product-price">{priceArray[index]}</h4>
                <img src={image} alt="gallery_image " />
                  <div className="carousel_product_copy">{copyArray[index]}</div>
                {/* <a href="https://instagram.com/portal.st50?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" className="Instagram_link">
                  <BsInstagram className="Instagram_link" />
                </a> */}
              </div>
            </div>
          ))}
    </Slider>
    </div>
  </div>
)};

export default Carousel;
