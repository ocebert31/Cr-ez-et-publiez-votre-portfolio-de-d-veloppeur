import React from 'react';
import Banner from '../common/banner';
import Back from './logo-back.jpg';
import Front from './logo-front.jpg';
import Outil from './logo-outil.jpg';
import './skill.css';

function Skill() {
    return (
        <div className="skill-container" id='skill'>
            <Banner text="Mes compétences" />
            <div className="columns">
                <div className="column">
                    <img src={Front} alt="logo1" />
                    <p>HTML / CSS / SCSS /
                        <br/>
                         Javascript / React</p>
                </div>
                <div className="column">
                    <img src={Back} alt="Logo 2" />
                    <p>Node.js / MongoDB / Express.js 
                    <br/>
                    / Création et utilisation API</p>
                </div>
                <div className="column">
                    <img src={Outil} alt="Logo 3" />
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
