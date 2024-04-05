import React from 'react'
import counter from '../assets/images/counter_img.jpg'
import tables from '../assets/images/tables_img.jpg'
import pasta from '../assets/images/pasta_img.jpg'
import pub from '../assets/images/pub_img.jpg'
import birre from '../assets/images/birre_img.jpg'
import spina from '../assets/images/spina_img.jpg'
import fritte from '../assets/images/fritte_img.jpg'
import hamburger from '../assets/images/hamburger_img.jpg'
import tagliere from '../assets/images/tagliere_img.jpg'

function Gallery() {
    return (
        <>
            <h1 id="gallery-title">Scopri il nostro ristorante</h1>
            <h2 className="gallery-subtitle">Il locale</h2>
            <div className="gallery-container">
                <img className='gallery-img' src={counter} alt="bancone del ristorante" />
                <img className='gallery-img' src={tables} alt="vista dei tavoli" />
                <img className='gallery-img' src={pub} alt="vista completa dle pub" />
                <img className='gallery-img' src={spina} alt="spina della birra" />
                <img className='gallery-img' src={birre} alt="amici che brindano con birre" />
            </div>
            <h2 className="gallery-subtitle">Il menu</h2>
            <div>
                <img className='gallery-img' src={pasta} alt="piatto di pasta" />
                <img className='gallery-img' src={fritte} alt="piatto di patatine fritte" />
                <img className='gallery-img' src={hamburger} alt="hamburger gourmet" />
                <img className='gallery-img' src={tagliere} alt="tagliere di affettati e formaggio" />
            </div>
        </>
    )
}

export default Gallery