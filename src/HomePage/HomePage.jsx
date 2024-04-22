import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>
        <div className='header__nav'>
            <div className='header__logo'><p className='header__p'>LOGO</p></div>
            <div className='header__title'>
                <p className='title__text'>Запчасти и спецтехника для горнодобывающей отрасли</p>
            </div>
            <div className='header__cont'> 
                <p className='header__email'>frontend.test@mail.ru</p>
                <p className='header__phone'>+7 499 999-99-99</p>
            </div>
        </div>
        <div className='banner'>
            <div className='banner__text'>
                <h1 className='banner__title'>Официальные диллеры Komatsu, 
                    Epiroc и Manitou в России</h1>
                <ul className='banner__list'>
                    <li>Подор техники под ваши задачи</li>
                    <li>Выкуп и доставка оборудования</li>
                    <li>Техническое обслуживание 24/7</li>
                </ul>
                <p className='banner__us'>
                    Оставьте заявку по почте frontend.test@mail.ru.
                    Наши менеджеры свяжутся с вами в течение 15 минут.
                </p>
            </div>
        </div>
        </>
    );
}

export default HomePage;


