import React, {useState} from 'react';
import './Quoteta.css'

function Quoteta() {

    const [quotTxt, setQuottxt] = useState('Место под вашу цитату');
    const [quoteAuthor, setQuoteAuthor] = useState('Автор цитаты');
    const [quoteVisible, setQuoteVisible] = useState(true);

    window.jsonpCallback = function(data) {
        setQuottxt(data.quoteText);
        setQuoteAuthor(data.quoteAuthor);
        setQuoteVisible(true);
    }
    const handleClick = () => {
        setQuoteVisible(false);
    
        setTimeout(() => {
            const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=jsonpCallback';
            const script = document.createElement('script');
            script.src = url;
            document.head.appendChild(script);
        }, 500);
    }
    
    return (
        <div className='quotBlock'>
                <h1 className='quotTitle'>Цитаты — лучший способ изучения мыслителей от Древнего мира до современности!</h1>
                <div className='quotText'>
                    <blockquote className={`blockQuote ${quoteVisible ? 'visible' : ''}`}>
                        <p className='quotTxt'>{quotTxt}</p>
                        <cite className='quotAutor'>{`${quoteAuthor ?  `© ${quoteAuthor}` : ''}`}</cite>
                    </blockquote>
                </div>
                <div className='quotButton'>
                    <span className='quotBtnText'>Жми на кнопку и развивайся!</span>
                    <button onClick={handleClick} className='quotBtn'>Узнать цитату</button>
                </div>
        </div>
    );
}

export default Quoteta;
