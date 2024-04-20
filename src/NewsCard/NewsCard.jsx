import React from 'react';
import './NewsCard.css'

function NewsCard({newsImg, newsDate, newsTxt}) {
    return (
        <>
        <div>
            <div className='newsCard'>
                <img src={newsImg} alt="pic" className='newsCardImg' />
                <div className='newsCardItem'>
                <span className='itemDate'>{newsDate}</span>
                <p className='itemTxt'>{newsTxt}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default NewsCard;
