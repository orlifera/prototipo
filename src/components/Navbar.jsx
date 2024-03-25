import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom'
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/about">Chi Siamo</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contatti</Link>
                    </li>
                </ul>

                <ul>
                    <li className="switch">
                        <Switch />
                    </li>
                </ul>
            </nav >
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