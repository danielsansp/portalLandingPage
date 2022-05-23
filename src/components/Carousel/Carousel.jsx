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
      imagesArray = [images.portalweb, images.portazoweb, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.rancheraBurger, images.arepaBurger]
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
  <main className="slick-container" id={props.carouselId}>
    <div className="box1">
      <h2 className="slick-title">{props.product} </h2>
    </div>
    <div>
      <div className="box2">
      {/* <img src={images.rancheraBurger} alt="gallery_image " className="app__carousel-images_card"/>  */}
        <Slider {...settings} >
          {imagesArray.map((image, index) => (
            
            <div className="slick-slider"> 
                    <div className="app__carousel-images_card" key={`gallery_image-${index + 1}`}>
                      <h3 className="slick-product">{productArray[index]}</h3>
                      <h4 className="slick-product-price">{priceArray[index]}</h4>
                      <img src={image} alt="gallery_image " />
                        <div className="carousel_product_copy">{copyArray[index]}</div>
                      </div>
                  </div>
              ))}
        </Slider>
      </div>
    </div>
  </main>
)};

export default Carousel;
