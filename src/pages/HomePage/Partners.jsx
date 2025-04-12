import React from 'react';
import PartnerLogo1 from '../../assets/Partner_logo.png';
import PartnerLogo2 from '../../assets/Partner_logo_2.png';
import PartnerLogo3 from '../../assets/Partner_logo_3.png';

function Partners(){
    return(
        <section className='p-9 flex'>
            <div className='flex flex-col justify-center items-center gap-8'>
                {/**partners header */}
                <div className='flex flex-col justify-center items-center'>
                    <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Наши партнеры</span></p>
                    <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>Мы работаем с лучшими партнерами</h1>
                </div>
                {/**partners logos */}
                <div className='flex justify-between gap-6 flex-wrap'>
                    <img src={PartnerLogo1} alt="Partner logo 1" className='rounded-lg bg-white'/>
                    <img src={PartnerLogo2} alt="Partner logo 2" className='rounded-lg bg-white'/>
                    <img src={PartnerLogo3} alt="Partner logo 3" className='rounded-lg bg-white'/>
                </div>
            </div>
        </section>
    )
};
export default Partners;