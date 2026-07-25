import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

const destinos = [
  { label: 'Suramérica', href: '/#destinos' },
  { label: 'Europa', href: '/#destinos' },
  { label: 'Cruceros', href: '/#destinos' },
  { label: 'Lejano Oriente', href: '/#destinos' },
  { label: 'África y Exóticos', href: '/#destinos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [destOpen, setDestOpen] = useState(false)
  const [mobilDestOpen, setMobilDestOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check initial scroll
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setMobilDestOpen(false)
  }, [location])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const isHome = location.pathname === '/'

  const handleHashLink = (e, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    setDestOpen(false)
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
      <nav className={`navbar${(scrolled || !isHome) ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src={`${BASE}images/cropped-LOGO-TURISMO-UNIVERSAL-REPRESENTACIONES-S.A.S.-300x105.png`}
              alt="Turismo Universal Representaciones"
              height="55"
              style={{ height: '55px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Inicio
            </NavLink>

            <NavLink
              to="/visas"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Visas
            </NavLink>

            {/* Destinos dropdown */}
            <div
              className={`nav-dropdown${destOpen ? ' open' : ''}`}
              onMouseEnter={() => setDestOpen(true)}
              onMouseLeave={() => setDestOpen(false)}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setDestOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={destOpen}
              >
                Destinos <i className="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu">
                {destinos.map(d => (
                  <a
                    key={d.label}
                    href="#destinos"
                    onClick={e => handleHashLink(e, 'destinos')}
                  >
                    {d.label}
                  </a>
                ))}
              </div>
            </div>

            <NavLink
              to="/reservas"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Reservas
            </NavLink>

            <NavLink
              to="/nosotros"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Nosotros
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/visas"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Visas
        </NavLink>

        <button
          className="nav-link"
          style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          onClick={() => setMobilDestOpen(prev => !prev)}
        >
          Destinos <i className={`fas fa-chevron-${mobilDestOpen ? 'up' : 'down'}`}></i>
        </button>

        {mobilDestOpen && (
          <div className="mobile-dropdown-links">
            {destinos.map(d => (
              <a
                key={d.label}
                href="#destinos"
                onClick={e => handleHashLink(e, 'destinos')}
              >
                {d.label}
              </a>
            ))}
          </div>
        )}

        <NavLink
          to="/reservas"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Reservas
        </NavLink>

        <NavLink
          to="/nosotros"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Nosotros
        </NavLink>
      </div>
    </>
  )
}
