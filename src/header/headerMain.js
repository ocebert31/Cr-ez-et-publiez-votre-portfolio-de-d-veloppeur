import React from 'react';
import './headerMain.css';
import Logo from './logoPortfolio.webp';

function header() {
  return (
    <header className='header'>
        <div>
            <img src={Logo} alt='logo de mon portofolio avec mes initiales' className='header-left' loading="lazy"/>
        </div>
        <nav>
            <a href='#présentation' className='style-link-header'>Présentation</a>
            <a href='#skill' className='style-link-header'>Compétences</a>
            <a href='#portofolio' className='style-link-header'>Portofolio</a>
            <a href='#about' className='style-link-header'>A propos</a>
            <a href='#contact' className='style-link-header'>Contact</a>
        </nav>
    </header>
  );
}

export default header;
