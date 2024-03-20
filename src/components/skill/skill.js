import React from 'react';
import Banner from '../common/banner';
import Back from './logo-back.webp';
import Front from './logo-front.webp';
import Outil from './logo-outil.webp';
import './skill.css';

function Skill() {
    return (
        <div className="skill-container" id='skill'>
            <Banner text="Mes compétences" />
            <div className="columns">
                <div className="column">
                    <img src={Front} alt="logo1" loading="lazy"/>
                    <p>HTML / CSS / SCSS /
                        <br/>
                         Javascript / React</p>
                </div>
                <div className="column">
                    <img src={Back} alt="Logo 2" loading="lazy"/>
                    <p>Node.js / MongoDB / Express.js 
                    <br/>
                    / Création et utilisation API</p>
                </div>
                <div className="column">
                    <img src={Outil} alt="Logo 3" loading="lazy"/>
                    <p>Visual Studio / npm / Git 
                        <br/>/ GitHub / Github Pages / 
                        <br/>Lighthouse / Wave / GTmetrix / 
                        <br/>Google Rich Snippets</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
