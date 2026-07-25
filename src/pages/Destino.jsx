import { useParams, Link } from 'react-router-dom'
import { getDestino } from '../data/destinosData.js'
import PageHero from '../components/PageHero.jsx'

const WA_LINK = 'https://wa.me/573003748933?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20viaje'

export default function Destino() {
  const { slug } = useParams()
  const destino = getDestino(slug)

  if (!destino) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px' }}>
        <h2>Destino no encontrado</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={destino.title}
        subtitle={destino.tagline}
        img={destino.img}
      />

      {/* Info rápida */}
      <div className="destino-info-bar">
        <div className="container">
          <div className="destino-info-items">
            <div className="destino-info-item">
              <i className="fas fa-clock" />
              <div>
                <span className="info-label">Duración sugerida</span>
                <span className="info-value">{destino.duracion}</span>
              </div>
            </div>
            <div className="destino-info-item">
              <i className="fas fa-calendar-alt" />
              <div>
                <span className="info-label">Mejor época</span>
                <span className="info-value">{destino.mejorEpoca}</span>
              </div>
            </div>
            <div className="destino-info-item">
              <i className="fas fa-map-marker-alt" />
              <div>
                <span className="info-label">Región</span>
                <span className="info-value">{destino.region}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <section className="section destino-descripcion">
        <div className="container destino-desc-inner">
          <div className="destino-desc-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Descubre {destino.title}
            </h2>
            {destino.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="destino-desc-img">
            <img src={destino.img} alt={destino.title} />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section destino-highlights-section">
        <div className="container">
          <h2 className="section-title">¿Qué te espera?</h2>
          <p className="section-subtitle">
            Los lugares y experiencias que harán de este viaje algo inolvidable
          </p>
          <div className="destino-highlights-grid">
            {destino.highlights.map((h, i) => (
              <div className="destino-highlight-card" key={i}>
                <div className="highlight-icon">
                  <i className={h.icon} />
                </div>
                <h3>{h.label}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="destino-cta-section">
        <div className="container destino-cta-inner">
          <div className="destino-cta-text">
            <h2>¿Listo para vivir esta aventura?</h2>
            <p>
              Nuestros asesores de viaje están listos para crear el itinerario perfecto,
              adaptado exactamente a lo que sueñas.
            </p>
          </div>
          <div className="destino-cta-actions">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-lg">
              <i className="fab fa-whatsapp" />
              Cotiza por WhatsApp
            </a>
            <Link to="/#destinos" className="btn-outline-white">
              Ver más destinos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
