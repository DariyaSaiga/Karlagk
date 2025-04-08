import React from 'react';
import Hero from './Hero/Hero.jsx';
import WireDecoration from './WireDecoration/WireDecoration.jsx';
import About from './About/About.jsx';

function HomePage() {
  return (
    <div>
        <Hero />
        <About />
        <WireDecoration />
    </div>
  )
};

export default HomePage;
