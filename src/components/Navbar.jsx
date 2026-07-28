import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL
const WA = 'https://wa.me/573003748933'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleHashLink = (e, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    const scrollTo = () => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname === '/') {
      scrollTo()
    } else {
      navigate('/')
      setTimeout(scrollTo, 350)
    }
  }

  return (
    <>
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span><i className="fas fa-phone"></i> +57 300 374 8933</span>
            <span><i className="fas fa-envelope"></i> turismo.universal.rep@gmail.com</span>
            <span><i className="fas fa-map-marker-alt"></i> Bogotá, Colombia</span>
          </div>
          <div className="topbar-right">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo-brand">
            <img
              src={`${BASE}images/cropped-LOGO-TURISMO-UNIVERSAL-REPRESENTACIONES-S.A.S.-300x105.png`}
              alt="Turismo Universal Representaciones"
              className="logo-img"
            />
          </Link>

          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
            <a href="#servicios" onClick={e => handleHashLink(e, 'servicios')}>Servicios</a>
            <a href="#destinos" onClick={e => handleHashLink(e, 'destinos')}>Destinos</a>
            <NavLink to="/visas" className={({ isActive }) => isActive ? 'active' : ''}>Visas</NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active' : ''}>Nosotros</NavLink>
            <NavLink to="/reservas" className={({ isActive }) => isActive ? 'active' : ''}>Reservas</NavLink>
          </div>

          <div className="nav-cta">
            <a className="nav-wa" href={WA} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a className="btn btn-navy" href="#contacto" onClick={e => handleHashLink(e, 'contacto')}>
              Habla con un asesor
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Abrir menú"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" end>Inicio</NavLink>
          <a href="#servicios" onClick={e => handleHashLink(e, 'servicios')}>Servicios</a>
          <a href="#destinos" onClick={e => handleHashLink(e, 'destinos')}>Destinos</a>
          <NavLink to="/visas">Visas</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/reservas">Reservas</NavLink>
          <a href="#contacto" onClick={e => handleHashLink(e, 'contacto')}>Contacto</a>
        </div>
      </nav>
    </>
  )
}
