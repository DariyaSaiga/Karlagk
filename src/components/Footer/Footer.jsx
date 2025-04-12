import React from 'react';
import './Footer.css';
import Icon1 from '../../assets/icons/Icon.svg?react'
import Icon2 from '../../assets/icons/Icon-1.svg?react'
import Icon3 from '../../assets/icons/Icon-2.svg?react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-white m-0 lg:m-8 rounded-none lg:rounded-2xl px-4 lg:px-6 py-6'>
            <div className='flex flex-col'>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-start gap-4 text-gray-400 text-base font-medium'>
                        <Link to="/" className="foot-nav-link py-3 px-2">Главная</Link>
                        <Link to="/about" className="foot-nav-link py-3 px-2">О нас</Link>
                        <Link to="/map" className="foot-nav-link py-3 px-2">Карлаг карта</Link>
                        <Link to="/archeology" className="foot-nav-link py-3 px-2">Археология карлага</Link>
                        <Link to="/blog" className="foot-nav-link py-3 px-2">Блог</Link>
                        <Link to="/sources" className="foot-nav-link py-3 px-2">Источники</Link>
                        <Link to="/contacts" className="foot-nav-link py-3 px-2">Контакты</Link>
                    </div>
                    <div className='flex gap-3'>
                        <button aria-label="Facebook" className='bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition border border-[#CBDEF7]'><Icon1 /></button>
                        <button aria-label="Instagram" className='bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition border border-[#CBDEF7]'><Icon2 /></button>
                        <button aria-label="Twitter" className='bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition border border-[#CBDEF7]'><Icon3 /></button>
                    </div>  
                </div>     
                <hr className="my-4 border-gray-300" />
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center text-gray-500 text-sm gap-4'>
                    <p>All Rights are reserved️</p>
                    <div className='flex gap-4'>
                        <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                        <p className='hover:underline cursor-pointer'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;