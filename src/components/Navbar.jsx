import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom'
import sinna from '../assets/images/sinna_logo.jpeg'


function bar() {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("bar mounted");
    }, []);

    function handleResize() {
        setSize(window.innerWidth);
    }


    if (size > 768) {
        return (
            <nav id="menu">
                <a href="/" id="logo">
                    <img src={ sinna } />
                </a>
                <ul>
                    <li className='first'>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" activeClassName="active">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">Chi Siamo</NavLink>
                    </li>
                    <li >
                        <NavLink to="/contact" activeClassName="active">Contatti</NavLink>
                    </li>
                    <li className='slide'></li>
                </ul>
                <ul>
                    <li className="switch">
                        <Switch />
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <>
                <MobileNav />
            </>
        )
    }

}



export default bar