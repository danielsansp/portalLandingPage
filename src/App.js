import React from 'react';

import { Footer, Gallery, Header, SandwichGallery, PerrosGallery } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Gallery />
    <SandwichGallery />
    <PerrosGallery />
    <Footer />
  </div>
);

export default App;
