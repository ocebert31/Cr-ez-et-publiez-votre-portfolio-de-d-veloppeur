import React from 'react';
import './header.css';
import Logo from './logoPortfolio.png';

function header() {
  return (
    <header className='header'>
        <div>
            <img src={Logo} alt='logo' className='header-left'/>
        </div>
        <nav>
            <a href='#présentation' className='style-link'>Présentation</a>
            <a href='#skill' className='style-link'>Compétences</a>
            <a href='#portofolio' className='style-link'>Portofolio</a>
            <a href='#about' className='style-link'>À propos</a>
            <a href='#contact' className='style-link'>Contact</a>
        </nav>
    </header>
  );
}

export default header;
