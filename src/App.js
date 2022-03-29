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
    <Carousel product ={"Hamburguesas"}/>
    <Carousel product ={"Perros"}/>
    <Carousel product ={"Sandwich"}/>
    <Footer />
  </div>
);

export default App;
