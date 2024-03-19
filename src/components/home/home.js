import React from 'react';
import './home.css';
import Profil from './profil.jpg';

function Home() {
    return (
        <div id='présentation'>
            <div className='style-home'>
                <div className='profile-section'>
                    <img src={Profil} alt="developpeur web" className='style-profil'/>
                    <div className='profile-info'>
                        <h1 className='name'>Océane Bertrand</h1>
                        <p className='title'>Développeuse Web</p>
                        <p className='location'>Basée à Bordeaux</p>
                    </div>
                </div>
            </div>
            <div className='container-info'>
                <p className='info'>Après l'obtention du baccalauréat, j'ai décidé de me lancer dans la formation Openclassroom. 
                Elle m'a offert l'opportunité de plonger dans le monde du développement en prenant part à la construction de multiples projets.
                <br/>
                Cette expérience me permet d'acquérir des compétences en : Frontend, Backend, optimisation de site </p>
                <p className='question'>Pourquoi me choisir ?</p>
                <p className='reponse'>Je me distingue par ma curiosité incessante et mon engagement sans faille dans le domaine du web</p>
            </div>
        </div>
    )
}

export default Home;
