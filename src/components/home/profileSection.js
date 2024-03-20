import React from 'react';
import './profileSection.css';
import Profil from './profil.webp';

function ProfileSection() {
    return (
        <div className='profile-section'>
            <img src={Profil} alt="developpeur web" className='style-profil'/>
            <div className='profile-info'>
                <h1 className='name'>Océane Bertrand</h1>
                <p className='title'>Développeuse Web</p>
                <p className='location'>Basée à Bordeaux</p>
            </div>
        </div>
    );
}

export default ProfileSection;