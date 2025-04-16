import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/Karlag.svg?react';
import MenuIcon from '../../assets/icons/Icon_menu.svg?react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className='px-5 py-3 flex items-center justify-between'>
        <Link to="/" className='flex-shrink-0'>
          <Logo />
        </Link>
        
        <nav className='hidden lg:flex gap-6 text-base font-medium text-gray-400'>
          <NavLink to="/" end className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Главная</NavLink>
          <NavLink to="/about" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">О нас</NavLink>
          <NavLink to="/map" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Карлаг карта</NavLink>
          <NavLink to="/archeology" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Археология карлага</NavLink>
          <NavLink to="/blog" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Блог</NavLink>
          <NavLink to="/sources" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Источники</NavLink>
          <NavLink to="/contacts" className="nav-link hover:text-[#4E87D0] inline-block relative py-3 px-2">Контакты</NavLink>
        </nav>

        <div className='hidden lg:flex items-center'>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Kaz</button>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Ru</button>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Eng</button>
        </div>
      </div>
      <button className="bg-[#4E87D0] lg:hidden absolute right-5 top-2 p-2 rounded-lg" aria-label="Открыть меню" onClick={toggleMenu}>
        <MenuIcon className='w-6 h-6'/>
      </button>
      {isMenuOpen && (
        <div className="lg:hidden px-5 pb-4 space-y-4">
          <nav className='flex flex-col gap-2 text-gray-400 text-base font-medium'>
            <NavLink to="/" end onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Главная</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">О нас</NavLink>
            <NavLink to="/map" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Карлаг карта</NavLink>
            <NavLink to="/archeology" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Археология карлага</NavLink>
            <NavLink to="/blog" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Блог</NavLink>
            <NavLink to="/sources" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Источники</NavLink>
            <NavLink to="/contacts" onClick={toggleMenu} className="hover:text-[#4E87D0] inline-block relative py-3 px-2">Контакты</NavLink>
          </nav>
          <div className="flex gap-4 pt-2">
            <button className='lang-switch text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Kaz</button>
            <button className='lang-switch text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Ru</button>
            <button className='lang-switch text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Eng</button>
          </div>
        </div>
      )}
    </header>
  )
};

export default Header;