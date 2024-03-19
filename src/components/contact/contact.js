import React from 'react';
import Banner from '../common/banner';
import './contact.css';

function Contact() {
    return (
        <div id='contact'>
            <Banner text="Me Contacter" />
            <div className='alignement'>
                <div className="centered-text">
                    <p>Par mail: oceanebertrand339@gmail.com</p>
                </div>
                <div className="centered-text">
                    <p>Sur Linkedin : <a  className='link' href="https://www.linkedin.com/in/oc%C3%A9ane-bertrand-39b5a324b/">Cliquez ici</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
