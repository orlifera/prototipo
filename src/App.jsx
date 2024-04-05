import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import Hamburger from './components/Hamburger'
import Gallery from './pages/Gallery'

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
        <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
      { windowWidth > 768 ? <Footer /> : null }

    </>
  )
}

export default App
