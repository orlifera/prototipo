import React from 'react'
import { Link } from 'react-router-dom'
import MobileSwitch from './MobileSwitch'

function MobileNav() {
    return (
        <nav id='mobile'>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/menu" >Menu</Link>
                <li className='switch'><MobileSwitch /></li>
                <Link to="/about">Chi siamo</Link>
                <Link to="/contact">Contattaci</Link>
            </ul>
        </nav >
    )
}

export default MobileNav