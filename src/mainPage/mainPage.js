import React from 'react';
import Home from '../components/home/home';
import Skill from '../components/skill/skill';
import Portofolio from '../components/portofolio/portofolio';
import About from '../components/about/about';
import Contact from '../components/contact/contact';

function mainPage() {
    return (
        <div>
            <Home/>
            <Skill/>
            <Portofolio/>
            <About/>
            <Contact/>
        </div>
    );
}

export default mainPage;