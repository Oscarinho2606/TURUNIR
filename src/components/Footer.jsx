import { Link, useNavigate, useLocation } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToDestinos = (e) => {
    e.preventDefault()
    const scrollTo = () => {
      const el = document.getElementById('destinos')
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
          {/* Column 1: Logo + Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '8px', padding: '8px 14px', display: 'inline-block' }}>
                <img
                  src={`${BASE}images/cropped-LOGO-TURISMO-UNIVERSAL-REPRESENTACIONES-S.A.S.-300x105.png`}
                  alt="Turismo Universal Representaciones"
                  style={{ height: '55px', width: 'auto', display: 'block' }}
                />
              </div>
            </div>
            <p>Agencia de Viajes y Representaciones Colombia</p>
            <p style={{ marginTop: '8px' }}>
              <strong style={{ color: '#bbb' }}>Registro Nacional de Turismo No. 29224</strong>
            </p>
            <p style={{ marginTop: '12px', fontSize: '13px', color: '#777' }}>
              Ofrecemos los mejores paquetes turísticos nacionales e internacionales con más de dos décadas de experiencia en el mercado colombiano.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-widget-title">Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/visas">Visas</Link></li>
              <li><Link to="/reservas">Reservas</Link></li>
              <li><Link to="/sostenibilidad">Sostenibilidad</Link></li>
              <li><Link to="/clausulas">Cláusulas</Link></li>
            </ul>
          </div>

          {/* Column 3: Destinos */}
          <div className="footer-col">
            <h4 className="footer-widget-title">Destinos</h4>
            <ul>
              <li><a href="#destinos" onClick={goToDestinos}>Suramérica</a></li>
              <li><a href="#destinos" onClick={goToDestinos}>Europa</a></li>
              <li><a href="#destinos" onClick={goToDestinos}>Cruceros</a></li>
              <li><a href="#destinos" onClick={goToDestinos}>Lejano Oriente</a></li>
              <li><a href="#destinos" onClick={goToDestinos}>África y Exóticos</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-widget-title">Contacto</h4>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Calle 147 No 7C 65 Interior 18, Bogotá - Colombia</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <span>
                Tel: +571 527 7485<br />
                Cel: +57 3003748933
              </span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:turismo.universal.rep@gmail.com">turismo.universal.rep@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-globe"></i>
              <a href="http://www.turunir.com" target="_blank" rel="noopener noreferrer">www.turunir.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; 2024 Turismo Universal Representaciones S.A.S.</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
