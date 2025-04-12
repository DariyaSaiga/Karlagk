import React from 'react';

import Hero from './Hero.jsx';
import About from './About.jsx';
import News from './News.jsx';
import Partners from './Partners.jsx';
import WireDecoration from './WireDecoration.jsx';

function HomePage() {
  return (
    <div>
        <Hero />
        <About />
        <News />
        <Partners/>
        <WireDecoration />
    </div>
  )
};

export default HomePage;
