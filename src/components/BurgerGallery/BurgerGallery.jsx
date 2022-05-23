import React from 'react';

import { Carousel } from '..';
import { data } from '../../constants';

function BurgerGallery(prps) {
    
    return (
      <div className="">
          <Carousel product ={"Hamburguesas"} carouselId={"burger"} slideTitle={data.burgers} image="burgers" />
      </div>
    )
  }

  export default BurgerGallery;