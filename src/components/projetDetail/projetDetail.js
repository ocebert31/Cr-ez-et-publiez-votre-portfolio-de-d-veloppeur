import React from 'react';
import { useParams } from 'react-router-dom';
import projetData from '../../projet.json';
import './projetDetail.css';
import GitLogo from './logoGit.png';

function ProjetDetails() {
  const { id } = useParams();
  const projet = projetData.find(projet => projet.id === id.toString());

  return (
    <div className='style-container-projet'>
      <div className='postition-titre-tag'>
          <h1>{projet.title}</h1>
          <div className='tags-container'>
            {projet.tags.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
              </span>
            ))}
          </div>
      </div>
      <div className='position-description-image'>
        <div className='position-info'>
          <p>{projet.description}</p>
          <div className="git-logo-container">
            <a href={projet.link} target="_blank" rel="noopener noreferrer" className='alignement-logo-git'>
              <img src={GitLogo} alt="Git Logo"/>
            </a>
          </div>
        </div>
          <img src={projet.cover} alt='presentation projet'/>
      </div>
    </div>
  );
}

export default ProjetDetails;


