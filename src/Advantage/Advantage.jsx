import React from 'react';
import './Advantage.css'
import office from './img/office.svg'
import adv2 from './img/adv2.svg'
import adv3 from './img/adv3.svg'
import adv4 from './img/adv4.svg'
import adv5 from './img/adv5.svg'
import adv6 from './img/adv6.svg'

function Advantage() {
    return (
        <>
        <div className='advBlock'>
            <div>
        <h1 className='advTitle'>Наши преимущества</h1>
            </div>
            <div className='advCard'>
                <div className='advCardItem'>
                    <img src={office} alt="office" className='itemImg' />
                    <div>
                    <h3 className='itemTitle'>Офисы по всей стране</h3>
                    <p className='itemText'>Мы  — официальный дистрибьютор крупнейших производителей горнодобывающей техники.</p>
                    </div>
                </div>
                <div className='advCardItem'>
                    <img src={adv2} alt="office" className='itemImg' />
                    <div className='itemBlock'>
                    <h3 className='itemTitle'>500 лет на рынке</h3>
                    <p className='itemText'>Знаем этот рынок с этапа зарождения до проблематики сферы сегодняшнего дня. Предоставим обучение вашим специалистам бесплатно!</p>
                    </div>
                </div>
                <div className='advCardItem'>
                    <img src={adv3} alt="office" className='itemImg' />
                    <div>
                    <h3 className='itemTitle'>Обслуживание 24/7</h3>
                    <p className='itemText'>Укомплектованный штат в 90 человек позволяет реагировать на ваши запросы в любое время суток.</p>
                    </div>
                </div>
                <div className='advCardItem'>
                    <img src={adv4} alt="office" className='itemImg' />
                    <div>
                    <h3 className='itemTitle'>Аутсорс по ВЭД</h3>
                    <p className='itemText'>Поможем с доставкой, таможенным оформлением и прохождением таможни.</p>
                    </div>
                </div>
                <div className='advCardItem'>
                    <img src={adv5} alt="office" className='itemImg' />
                    <div>
                    <h3 className='itemTitle'>Офис в вашем городе</h3>
                    <p className='itemText'>8 представительств в крупных регинах России. Предоставим персональную консультацию с выездом 
на предприятие в любом городе страны.</p>
                    </div>
                </div>
                <div className='advCardItem'>
                    <img src={adv6} alt="office" className='itemImg' />
                    <div>
                    <h3 className='itemTitle'>Подрядные горные работы</h3>
                    <p className='itemText'>Полный цикл работ по добыче, транспортировке сырья и обработке сыпучих материалов.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Advantage;
