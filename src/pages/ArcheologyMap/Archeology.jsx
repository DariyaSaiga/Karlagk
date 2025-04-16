import React from "react";
import Quotes from '../../assets/QuotesBlue.svg?react';

const ExcavationPage = () => {
  return (
    <section className="pt-6 pb-10 space-y-8 max-w-7xl mx-auto px-4 sm:px-2">
      {/* Заголовок */}
      <div className="flex flex-col items-center text-center space-y-6 mb-10">
        <span className="mt-20 px-3 py-1 text-xs bg-[#CBDEF7] text-[#4E87D0] font-semibold rounded-full uppercase">
          Археология Карлага
        </span>
        <h1 className="lg:text-3xl text-2xl font-bold max-w-md leading-snug">
          Раскопки забытых следов советских репрессий
        </h1>
        <p className="text-black-600 max-w-3xl mx-auto">
        Исследуйте археологические находки Карлага, одного из крупнейших советских трудовых лагерей в Казахстане. Узнайте, как раскопки и исследования раскрывают скрытые следы жизни заключенных, лагерную инфраструктуру и долгосрочное влияние принудительного труда.<span className="text-gray-400"> Откройте для себя артефакты, исторические места и экспертные анализы, которые проливают свет на прошлое Карлага</span>
        </p>
      </div>

      {/* Навигация */}
      <div className="bg-white rounded-2xl pt-2 max-w-3xl mx-auto overflow-hidden">
        <div className="flex justify-center gap-6 lg:text-sm text-xs font-medium border-b border-gray-200">
          <button className="pb-2 border-b-2 border-blue-500 text-blue-600 lg:w-1/3 w-full">
            Археология Карлага
          </button>
          <button className="pb-2 text-gray-500 lg:w-1/3 w-full border-b-2 border-transparent">
            Karlag Memories
          </button>
          <button className="pb-2 text-gray-500 lg:w-1/3 w-full border-b-2 border-transparent">
            Historical Maps
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Изображение */}
        <img
          src="src/assets/Map_photo.png"
          alt="Brick ruins"
          className="rounded-xl object-cover w-full lg:h-130 h-50 col-span-2"
        />
        {/* Белый контейнер */}
        <div className="relative bg-white rounded-xl p-6 ">
          <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none" />
          <Quotes
            className="absolute right-0 bottom-0 z-0 pointer-events-none transform rotate-180"
          />
          <h1 className="text-3xl font-semibold mb-2 relative z-10">Aktailak village</h1>
          <p className="text-black-600 lg:pt-75 pt-30 relative z-10">
            Aktailak is a village located in the Zhana-Arka district of Ulytau Oblast. It served as the
            administrative centre of the 8th subdivision of the Karlag camp system for a long period
            (1931–1959).
          </p>
        </div>
      </div>

      {/* Галерея */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="src/assets/Archeology.png"
            alt="Excavation group"
            className="object-cover w-full lg:h-120 h-90"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="src/assets/Archeology.png"
            alt="Excavation group"
            className="object-cover w-full lg:h-120 h-90"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="src/assets/Archeology.png"
            alt="Excavation group"
            className="object-cover w-full lg:h-120 h-90"
          />
        </div>
      </div>

      {/* Последняя секция */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div className="w-full h-auto relative bg-white rounded-xl p-4 py-15 lg:py-33 overflow-hidden">
          <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none" />
          <Quotes
            className="absolute object-cover right-0 bottom-0 z-0 pointer-events-none transform rotate-180"
          />
          <blockquote className="text-sm sm:text-base lg:text-lg text-black-700 relative z-10">
            Aktailak represents a camp that was rural and held common prisoners as well as political
            prisoners. Historical records examined by the student team indicate that more than 2,000
            prisoners worked in irrigation, dairy farming, and livestock farming at the site. The ruins of
            the camp are still visible today, marking it a valuable site for archaeological research.
          </blockquote>
        </div>
        <img
          src="src/assets/Archeology2.png"
          alt="Kids digging"
          className="rounded-xl object-cover w-full lg:h-130 h-50 col-span-2"
        />
      </div>
    </section>
  );
};

export default ExcavationPage;
