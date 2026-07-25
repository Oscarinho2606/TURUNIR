import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo + Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img
                src="/images/cropped-LOGO-TURISMO-UNIVERSAL-REPRESENTACIONES-S.A.S.-300x105.png"
                alt="Turismo Universal Representaciones"
                style={{ height: '60px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8 }}
              />
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
              <li><Link to="/reservas">Reservas</Link></li>
              <li><Link to="/sostenibilidad">Sostenibilidad</Link></li>
              <li><Link to="/clausulas">Cláusulas</Link></li>
            </ul>
          </div>

          {/* Column 3: Destinos */}
          <div className="footer-col">
            <h4 className="footer-widget-title">Destinos</h4>
            <ul>
              <li><a href="/#destinos">Suramérica</a></li>
              <li><a href="/#destinos">Europa</a></li>
              <li><a href="/#destinos">Cruceros</a></li>
              <li><a href="/#destinos">Lejano Oriente</a></li>
              <li><a href="/#destinos">África y Exóticos</a></li>
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
