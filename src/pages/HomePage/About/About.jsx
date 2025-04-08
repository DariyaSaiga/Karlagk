import React from 'react';
import MainSVG from '../../../assets/Main_svg.svg?react';
import Video from '../../../assets/Video.png';

function About(){
    return(
        <section className='relative p-8 m-8 bg-white rounded-2xl'>
            <div className='flex '>
              {/*About Content*/}
              <div className='flex flex-col z-1 justify-between w-1/2'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col'>
                    <b><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase'>What is Karlag</span></b>
                    <h1 className='text-4xl font-bold'>Карлаг, Гулаг в Казахстане</h1>
                  </div>
                  <p>Карлаг, расположенный недалеко от Караганды, является одним из самых значительных и долговечных лагерных комплексов в советской системе ГУЛАГа.</p>
                  <p>Действовавший с 1931 по 1959 год, он  содержал ошеломляющее количество заключенных,  в пределах его границ содержалось более 60 000 человек, не считая спецпоселенцев и местного населения. </p>
                </div>
                <div className=''>
                  <p>Название видео</p>
                  <div className='aspect-video'>
                    <video controls poster={Video} className='object-cover rounded-xl'></video>
                  </div>
                </div>
              </div>
              <MainSVG className="absolute object-cover bottom-0 left-0 w-1/2 h-auto"/>
              {/*About Images Content*/}
              <div className='flex flex-col '></div>
            </div>
        </section>
    )
};

export default About;