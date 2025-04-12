import React from 'react';
import HeroImage from '../../assets/HeroImage.png';

function Hero() {
  return (
    <section className="mt-20">
      <div className='relative w-full  lg:min-h-screen  overflow-auto rounded-2xl lg:scale-[0.95]'>
        <img 
        className="hidden lg:block absolute w-full h-full object-cover z-[1]"
        src={HeroImage}
        alt="Hero background"/>
        <img 
        className="block lg:hidden w-full rounded-lg"
        src={HeroImage}
        alt="Hero background"/>
      </div>
    </section>
  );
}

export default Hero;
