import React from 'react';
import './TechnicalCatalog.css'
import CatCard from '../CatCard/CatCard.jsx'
import komatsu from './komatsu.svg'
import erpiroc from './erpiroc.svg'
import manitou from './manitou.svg'
import hensey from './hensey.svg'
import kvx from './kvx.svg'

function TechnicalCatalog() {
    return (
        <>
        <div className='techBlock'>
            <div>
                <h1 className='techTitle'>Каталог техники</h1>
            </div>
            <div className='techCard'>
                <CatCard img = {komatsu} text = 'Komatsu'/>
                <CatCard img = {erpiroc} text = 'Erpiroc'/>
                <CatCard img = {manitou} text = 'Manitou'/>
                <CatCard img = {hensey} text = 'Komatsu'/>
                <CatCard img = {kvx} text = 'KVX'/>
            </div>
        </div>
        </>
    );
}

export default TechnicalCatalog;
