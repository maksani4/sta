import React from 'react';
import './SpareCatalog.css'
import CatCard from '../CatCard/CatCard';
import komatsu from './img/komatsu.svg'
import erpiroc from './img/erpiroc.svg'
import manitou from './img/manitou.svg'
import other from './img/other.svg'

function SpareCatalog() {
    return (
        <>
        <div className='spareBlock'>
            <div>
        <h1 className='spareTitle'>Каталог запчастей</h1>
            </div>
            <div className='spareCard'>
            <CatCard img = {komatsu} text = 'Komatsu'/>
            <CatCard img = {erpiroc} text = 'Erpiroc'/>
            <CatCard img = {manitou} text = 'Manitou'/>
            <CatCard img = {other} text = 'Прочее'/>
            </div>
        </div>
        </>
    );
}

export default SpareCatalog;
