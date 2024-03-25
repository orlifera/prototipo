import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hamburger from './components/Hamburger'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <Hamburger /> */ }
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contacts /> } />
      </Routes>
      { windowWidth > 768 ? <Footer /> : null }

    </>
  )
}

export default App
