import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logoPortfolio.png';

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={Logo} alt='logo' className='header-left'/>
      </div>
      <nav>
        <Link to='/' className='style-link'>Page d'accueil</Link>
      </nav>
    </header>
  );
}

export default Header;

