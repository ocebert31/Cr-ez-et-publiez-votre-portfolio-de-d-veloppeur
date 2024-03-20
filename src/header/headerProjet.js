import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logoPortfolio.webp';

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={Logo} alt='logo de mon portofolio avec mes initiales' className='header-left' loading="lazy"/>
      </div>
      <nav>
        <Link to='/' className='style-link'>Page d'accueil</Link>
      </nav>
    </header>
  );
}

export default Header;

