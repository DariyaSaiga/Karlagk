import React from 'react';
import ArrowIcon from '../../assets/icons/Icon_arrow_right.svg?react';
import CardImage from '../../assets/Card_IMG.png';

function News(){
    return(
        <section className='relative p-4 md:p-8'>
            <div className='flex flex-col'>
                {/** News Header */}
                <div className='flex justify-between'>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Наши последние новости</h1>
                    <button className='flex items-center gap-2 py-3 px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300'>Посмотреть все <ArrowIcon className='items-center'/></button>
                </div>
                {/** News Content */}
                <div>
                    
                </div>
            </div>
        </section>
    )
}
export default News;