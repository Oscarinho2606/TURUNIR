import { Link, useNavigate, useLocation } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToHash = (e, id) => {
    e.preventDefault()
    const scrollTo = () => {
      const el = document.getElementById(id)
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
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo + intro */}
          <div className="footer-col">
            <div className="footer-logo-img">
              <img
                src={`${BASE}images/cropped-LOGO-TURISMO-UNIVERSAL-REPRESENTACIONES-S.A.S.-300x105.png`}
                alt="Turismo Universal Representaciones"
              />
            </div>
            <p>Más de dos décadas ofreciendo los mejores paquetes turísticos nacionales e internacionales.</p>
            <p className="footer-rnt">Registro Nacional de Turismo No. 29224</p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><a href="#servicios" onClick={e => goToHash(e, 'servicios')}>Servicios</a></li>
              <li><Link to="/visas">Visas</Link></li>
              <li><Link to="/reservas">Reservas</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/sostenibilidad">Sostenibilidad</Link></li>
              <li><Link to="/clausulas">Cláusulas</Link></li>
            </ul>
          </div>

          {/* Destinos */}
          <div className="footer-col">
            <h4>Destinos</h4>
            <ul>
              <li><a href="#destinos" onClick={e => goToHash(e, 'destinos')}>Suramérica</a></li>
              <li><a href="#destinos" onClick={e => goToHash(e, 'destinos')}>Europa</a></li>
              <li><a href="#destinos" onClick={e => goToHash(e, 'destinos')}>Cruceros</a></li>
              <li><a href="#destinos" onClick={e => goToHash(e, 'destinos')}>Lejano Oriente</a></li>
              <li><a href="#destinos" onClick={e => goToHash(e, 'destinos')}>África y exóticos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <p><i className="fas fa-map-marker-alt"></i> Calle 147 No 7C 65 Int. 18, Bogotá</p>
            <p><i className="fas fa-phone"></i> +57 300 374 8933</p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:turismo.universal.rep@gmail.com">turismo.universal.rep@gmail.com</a></p>
            <p><i className="fas fa-globe"></i> <a href="http://www.turunir.com" target="_blank" rel="noopener noreferrer">www.turunir.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Turismo Universal Representaciones S.A.S.</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
