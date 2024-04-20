import React from 'react';
import './CatCard.css'

function CatCard({img, text}) {
    return (
        <>
        <div className='catCard'>
        <img src={img} alt="logo" className='catCardImg' />
        <p className='cardText'>{text}</p>
        </div>
        </>
    );
}

export default CatCard;
