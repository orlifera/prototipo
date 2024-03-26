import React from 'react'
import welcome from '../assets/images/welcome_img.jpg'
import counter from '../assets/images/counter_img.jpg'
import tables from '../assets/images/tables_img.jpg'
import pasta from '../assets/images/pasta_img.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div id="home">
                <img id='welcome-img' src={welcome} alt='complete restaurant view'></img>
                <div id='welcome-text'>
                    <h1 id='welcome-title'>Benvenuti da ...</h1>
                    <p id="welcome-description">Dove ti puoi sentire a casa</p>
                    <Link to="/about" id='about-btn' className='home-btn'>Chi siamo</Link>
                    <Link to="/menu" id='menu-btn' className='home-btn'>Scopri il menù</Link>
                </div>
            </div>
            <div id="gallery-div">
                <h2 id='gallery-title'>Here is the restaurant gallery!</h2>
                <img src={counter} alt="view of the counter" />
                <img src={tables} alt="view of the tables" />
                <img src={pasta} alt="view of a plate of pasta" />
            </div>
            <div id="newsletter"></div>
        </>
    )
}

export default Home