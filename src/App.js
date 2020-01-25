// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Header from './Views/Header';
import Hero from './Views/Hero';
import Facts from './Views/Facts';
import Photos from './Views/Photos';
import Videos from './Views/Videos';
import Credits from './Views/Credits';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Facts />
      <Photos />
      <Videos />
      <Credits />
    </div>
  );
}

export default App;
