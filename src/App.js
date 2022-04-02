import React from 'react';

import { Footer, Header,} from './container';
import { Navbar, Carousel} from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <Gallery />
    <SandwichGallery />
    <PerrosGallery /> */}
    <Carousel product ={"Hamburguesas"} carouselId={"burger"} image="burgers"/>
    <Carousel product ={"Perros"} carouselId={"perros"} image="perros"/>
    <Carousel product ={"Sandwich"} carouselId={"sandwich"} image="sandwich"/>
    <Footer />
  </div>
);

export default App;
