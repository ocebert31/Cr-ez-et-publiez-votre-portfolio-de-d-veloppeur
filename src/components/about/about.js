import React from 'react';
import Banner from '../common/banner';
import './about.css';

function about() {
    return (
        <div id='about'>
           <Banner text="A propos" />
                <div className='alignement'>
                    <p className='hobby'>💪 En dehors du monde du développement, je suis une passionnée de musculation. Chaque séance d'entraînement me permet de me ressourcer et de trouver l'équilibre nécessaire pour exceller dans mon travail de développeuse.</p>
                    <p className='hobby'>🗓️ À partir de début mai, je serai disponible pour toute collaboration ou opportunité professionnelle.</p>
                    <p className='slogan'>"La discipline est la clé de tout succès. Que ce soit à l'école, au travail ou dans la salle de sport, la discipline vous mènera loin." <br/>- Arnold Schwarzenegger</p>
                </div>
        </div>
    )
}

export default about;