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
    <Carousel product ={"Hamburguesas"} carouselId={"burger"}/>
    <Carousel product ={"Perros"} carouselId={"perros"}/>
    <Carousel product ={"Sandwich"} carouselId={"sandwich"}/>
    <Footer />
  </div>
);

export default App;
