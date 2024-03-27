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
                <div id="gallery-text">
                    <h2 id='gallery-title'>Scopri il nostro ristorante!</h2>
                    <Link to="/gallery" id="gallery-btn" className='home-btn'>Vedi la galleria completa</Link>
                </div>
                <img className='gallery-img' src={counter} alt="view of the counter" />
                <img className='gallery-img' src={tables} alt="view of the tables" />
                <img className='gallery-img' src={pasta} alt="view of a plate of pasta" />
            </div>
            <hr></hr>
            <div id="newsletter-div">
                <div id='newsletter-text'>
                    <h2 id="newsletter-title">Entra a far parte della nostra famiglia</h2>
                    <p class="newsletter-subtitle">Registrati e riceverai le <span lang="en">newsletter</span> riguardanti eventi e molto altro!</p>
                </div>
                <form id="newsletter-form" method="post">
                    <input type="email" placeholder="mario.rossi@gmail.com" required id="form-email" name='form-email' aria-label="Email"/>
                    <button id="newsletter-btn" className='home-btn' type="submit">Avvisami</button>
                </form>
            </div>
        </>
    )
}

export default Home