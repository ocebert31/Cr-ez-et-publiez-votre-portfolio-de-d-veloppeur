import React from 'react';
import { Link } from 'react-router-dom';
import './projetsPortofolio.css';
import data from "../../projet.json";

function Projet() {
    return (
        <div className='container'>
            <div className='alignement-projet'>
                {data.map((projet, index) => (
                    <Link to={`/projet/${projet.id}`} key={index} className='size-projet'>
                        {/* Utilisez Link pour créer un lien vers la page détaillée de chaque projet */}
                        <h1 className='style-title'>{projet.title}</h1>
                        <div className='image-container'>
                            <img src={projet.cover} alt='projet'/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projet;

