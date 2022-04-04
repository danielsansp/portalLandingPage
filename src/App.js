import React from 'react';

import { Footer, Header,} from './container';
import { Navbar, Carousel} from './components';
import './App.css';
import { data } from './constants';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <Gallery />
    <SandwichGallery />
    <PerrosGallery /> */}
    <Carousel product ={"Hamburguesas"} carouselId={"burger"} slideTitle={data.burgers} image="burgers"/>
    <Carousel product ={"Perros"} carouselId={"perros"} slideTitle={data.perros} image="perros"/>
    <Carousel product ={"Sandwich"} carouselId={"sandwich"} slideTitle={data.sandwich} image="sandwich"/>
    <Footer />
  </div>
);

export default App;
