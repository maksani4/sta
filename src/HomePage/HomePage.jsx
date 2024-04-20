import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>
        <div className='block'>
            <span className='logo'>LOGO</span>
            <span className='title'>Запчасти и спецтехника для горнодобывающей отрасли</span>
            <span className='email'>frontend.test@mail.ru</span>
            <span className='phone'>+7 499 999-99-99</span>
        </div>
        <div className='banner'>
            <div className='bannerText'>
                <h1 className='bannerTitle'>Официальные диллеры Komatsu, 
                    Epiroc и Manitou в России</h1>
                <ul className='bannerList'>
                    <li>Подор техники под ваши задачи</li>
                    <li>Выкуп и доставка оборудования</li>
                    <li>Техническое обслуживание 24/7</li>
                </ul>
                <p className='bannerUs'>
                    Оставьте заявку по почте frontend.test@mail.ru.
                    Наши менеджеры свяжутся с вами в течение 15 минут.
                </p>
            </div>
        </div>
        </>
    );
}

export default HomePage;
