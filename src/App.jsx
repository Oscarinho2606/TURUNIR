import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Reservas from './pages/Reservas.jsx'
import Sostenibilidad from './pages/Sostenibilidad.jsx'
import Clausulas from './pages/Clausulas.jsx'
import Destino from './pages/Destino.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small delay to let page render before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/sostenibilidad" element={<Sostenibilidad />} />
          <Route path="/clausulas" element={<Clausulas />} />
          <Route path="/destinos/:slug" element={<Destino />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
