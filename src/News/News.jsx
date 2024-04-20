import React from 'react';
import './News.css'
import NewsCard from '../NewsCard/NewsCard';
import news from './img/news.png'
import news1 from './img/news1.png'
import news2 from './img/news2.png'
import news3 from './img/news3.png'

function News() {
    return (
        <>
        <div className='newsBlock'>
            <div>
                <h1 className='newsTitle'>Новости</h1>
            </div>
            <div className='newsCardComp'>
                <NewsCard newsImg={news} newsDate='05 сентября 2019' newsTxt='Поздравляем всех коллег 
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел: 8 (999) 999 09-09 (Ирина).'/>
                <NewsCard newsImg={news1} newsDate='26 августа 2022' newsTxt='Поздравляем всех коллег 
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел: 8 (999) 999 09-09 (Ирина).'/>
                <NewsCard newsImg={news2} newsDate='05 сентября 2019' newsTxt='Поздравляем всех коллег 
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел: 8 (999) 999 09-09 (Ирина).'/>
                <NewsCard newsImg={news3} newsDate='26 августа 2022' newsTxt='Поздравляем всех коллег 
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел: 8 (999) 999 09-09 (Ирина).'/>
            </div>
        </div>
        </>
    );
}

export default News;
