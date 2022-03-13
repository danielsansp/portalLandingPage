import React from 'react';

import { Footer, Gallery, Header, SandwichGallery, PerrosGallery} from './container';
import { Navbar, Carousel} from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Gallery />
    <SandwichGallery />
    <PerrosGallery />
    <Carousel />
    <Footer />
  </div>
);

export default App;
