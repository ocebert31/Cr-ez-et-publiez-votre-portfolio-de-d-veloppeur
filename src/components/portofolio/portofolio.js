import React from 'react';
import Banner from '../common/banner';
import Projet from './projetsPortofolio';
import './portofolio.css';

function portofolio() {
    return (
        <div id='portofolio'>
            <Banner text="Mes Projets" />
            <div className='alignement-projet'>
                <Projet/>
            </div>
        </div>
    )
}

export default portofolio;