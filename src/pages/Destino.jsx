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
        <Link to="/" className="btn btn-navy" style={{ marginTop: '20px' }}>
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
        breadcrumb={`Inicio / Destinos / ${destino.title}`}
        img={destino.img}
      />

      <div className="destino-info-bar">
        <div className="container">
          <div className="destino-info-inner">
            <div className="destino-info-item">
              <i className="fas fa-clock"></i>
              <span>Duración: {destino.duracion}</span>
            </div>
            <div className="destino-info-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Mejor época: {destino.mejorEpoca}</span>
            </div>
            <div className="destino-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{destino.region}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="destino-desc-section">
        <div className="container destino-desc-inner">
          <div className="destino-desc-text">
            <span className="eyebrow">Un destino imperdible</span>
            <h2 style={{ marginBottom: '18px' }}>Descubre {destino.title}</h2>
            {destino.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="destino-desc-aside">
            <h3>¿Te interesa este destino?</h3>
            <p>
              Nuestros asesores diseñan itinerarios a la medida. Escríbenos y armamos tu viaje
              exactamente como lo imaginas.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-full">
              <i className="fab fa-whatsapp"></i> Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="destino-highlights-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Lo mejor de {destino.title}</span>
            <h2>¿Qué te espera?</h2>
            <p>Los lugares y experiencias que harán de este viaje algo inolvidable.</p>
          </div>
          <div className="destino-highlights-grid">
            {destino.highlights.map((h, i) => (
              <div className="destino-highlight-card" key={i}>
                <div className="destino-highlight-icon">
                  <i className={h.icon}></i>
                </div>
                <h4>{h.label}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="destino-cta-section">
        <div className="container">
          <h2>¿Listo para vivir esta aventura?</h2>
          <p>
            Nuestros asesores están listos para crear el itinerario perfecto, adaptado exactamente a
            lo que sueñas.
          </p>
          <div className="destino-cta-btns">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-lg">
              <i className="fab fa-whatsapp"></i> Cotizar por WhatsApp
            </a>
            <Link to="/reservas" className="btn btn-outline-white">
              Ir al formulario de reservas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
