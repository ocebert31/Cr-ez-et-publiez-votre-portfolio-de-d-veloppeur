import React from 'react';
import './banner.css';

function Banner({ text }) { 
    return (
        <div className='style-banner'>
           <p className='style-title-banner'>{text}</p>
        </div>
    )
}

export default Banner;
