import React from 'react';

import { Footer, Gallery, Header, SandwichGallery, PerrosGallery } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs /> */}
    {/* <SpecialMenu /> */}
    {/* <Chef /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <Gallery />
    <SandwichGallery />
    <PerrosGallery />
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
