import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'

const BASE = import.meta.env.BASE_URL

const services = [
  { icon: 'fas fa-ship', title: 'Cruceros', desc: 'Paquetes en crucero por el mundo' },
  { icon: 'fas fa-university', title: 'Europa', desc: 'Los mejores tours por Europa' },
  { icon: 'fas fa-tag', title: 'Ofertas', desc: 'Promociones y ofertas exclusivas' },
  { icon: 'fas fa-plane', title: 'Reservas', desc: 'Reserva tu viaje fácilmente' },
]

const destinos = [
  { img: `${BASE}images/cruceros.png`, title: 'Cruceros', cat: 'cruceros', slug: 'cruceros' },
  { img: `${BASE}images/europa-turismo-universal.png`, title: 'Europa', cat: 'europa', slug: 'europa' },
  { img: `${BASE}images/siente-vietnam.png`, title: 'Vietnam', cat: 'exoticos', slug: 'vietnam' },
  { img: `${BASE}images/siente-dubai.png`, title: 'Dubai', cat: 'exoticos', slug: 'dubai' },
  { img: `${BASE}images/siente-jordania.png`, title: 'Jordania', cat: 'exoticos', slug: 'jordania' },
  { img: `${BASE}images/siente-turquia.png`, title: 'Turquía', cat: 'exoticos', slug: 'turquia' },
  { img: `${BASE}images/siente-china.png`, title: 'China', cat: 'exoticos', slug: 'china' },
  { img: `${BASE}images/siente-japon.png`, title: 'Japón', cat: 'exoticos', slug: 'japon' },
  { img: `${BASE}images/siente-india.png`, title: 'India', cat: 'exoticos', slug: 'india' },
  { img: `${BASE}images/siente-kenia.png`, title: 'Kenia', cat: 'exoticos', slug: 'kenia' },
  { img: `${BASE}images/siente-tailandia.png`, title: 'Tailandia', cat: 'exoticos', slug: 'tailandia' },
  { img: `${BASE}images/buenos-aires-mar-de-plata.png`, title: 'Buenos Aires', cat: 'suramerica', slug: 'buenos-aires' },
  { img: `${BASE}images/lima-aventurera-plan.png`, title: 'Lima Aventurera', cat: 'suramerica', slug: 'lima-aventurera' },
  { img: `${BASE}images/lima-experiencia-turunir.png`, title: 'Lima Experiencia', cat: 'suramerica', slug: 'lima-experiencia' },
  { img: `${BASE}images/promo-exclusica-disney.png`, title: 'Disney', cat: 'suramerica', slug: 'disney' },
]

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Cruceros', value: 'cruceros' },
  { label: 'Europa', value: 'europa' },
  { label: 'Suramérica', value: 'suramerica' },
  { label: 'Exóticos', value: 'exoticos' },
]

const ofertas = [
  {
    img: `${BASE}images/siente-el-paraiso.png`,
    title: 'El Paraíso',
    desc: 'Paquetes exclusivos a los destinos más paradisíacos del mundo.',
  },
  {
    img: `${BASE}images/Siente-Vietnam-Nueva.png`,
    title: 'Vietnam',
    desc: 'Descubre los templos, paisajes y gastronomía de Vietnam.',
  },
  {
    img: `${BASE}images/siente-asia-central.png`,
    title: 'Asia Central',
    desc: 'Una aventura única por las rutas de la seda.',
  },
]

// Hook for scroll-triggered fade-in
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSuccess(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Envíenos un Mensaje</h3>
      {success && (
        <div className="contact-success">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
        </div>
      )}
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Su nombre completo"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Su correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Su mensaje..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
        Enviar Mensaje
      </button>
    </form>
  )
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const servicesRef = useFadeIn()
  const destinosRef = useFadeIn()
  const ofertasRef = useFadeIn()
  const contactRef = useFadeIn()

  const filteredDestinos = activeFilter === 'all'
    ? destinos
    : destinos.filter(d => d.cat === activeFilter)

  const handleDestinoClick = (e) => {
    e.preventDefault()
    // They link to /#destinos which is on same page — just scroll
    const el = document.getElementById('destinos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. Hero Slider */}
      <Hero />

      {/* 2. Nuestros Servicios */}
      <section id="servicios" className="section services-section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios turísticos diseñados para que tu viaje sea perfecto
          </p>
          <div className="services-grid fade-in" ref={servicesRef}>
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Destinos */}
      <section id="destinos" className="section destinos-section">
        <div className="container">
          <h2 className="section-title">Destinos</h2>
          <p className="section-subtitle">
            Explora el mundo con nosotros — desde el encanto de Europa hasta los exóticos destinos de Asia
          </p>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Destinos Grid */}
          <div className="destinos-grid fade-in" ref={destinosRef}>
            {filteredDestinos.map((d, i) => (
              <div className="destino-card" key={`${d.cat}-${i}`}>
                <img src={d.img} alt={d.title} loading="lazy" />
                <div className="destino-overlay">
                  <h3>{d.title}</h3>
                  <Link to={`/destinos/${d.slug}`} className="btn-primary">
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ofertas */}
      <section id="ofertas" className="section ofertas-section">
        <div className="container">
          <h2 className="section-title">Ofertas</h2>
          <p className="section-subtitle">
            Descubre nuestras promociones exclusivas y viaja más por menos
          </p>
          <div className="ofertas-grid fade-in" ref={ofertasRef}>
            {ofertas.map((o, i) => (
              <div className="oferta-card" key={i}>
                <div className="oferta-img-wrap">
                  <img src={o.img} alt={o.title} loading="lazy" />
                </div>
                <div className="oferta-content">
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                  <a href="https://wa.me/573003748933?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20viaje" target="_blank" rel="noopener noreferrer" className="btn-accent">
                    <i className="fab fa-whatsapp" style={{ marginRight: '6px' }} />
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contáctenos */}
      <section id="contacto" className="section contact-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>Contáctenos</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Estamos listos para ayudarte a planificar el viaje de tus sueños
          </p>

          <div className="contact-grid fade-in" ref={contactRef}>
            {/* Left: Form */}
            <ContactForm />

            {/* Right: Info */}
            <div className="contact-info">
              <h3>Información de Contacto</h3>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt" />
                <span>Calle 147 No 7C 65 Interior 18, Bogotá - Colombia</span>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-phone" />
                <span>
                  Tel: +571 527 7485<br />
                  Cel: +57 3003748933
                </span>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-envelope" />
                <a href="mailto:turismo.universal.rep@gmail.com">
                  turismo.universal.rep@gmail.com
                </a>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-globe" />
                <a href="http://www.turunir.com" target="_blank" rel="noopener noreferrer">
                  www.turunir.com
                </a>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-clock" />
                <span>
                  Lunes a Viernes: 8:00 AM – 6:00 PM<br />
                  Sábados: 9:00 AM – 1:00 PM
                </span>
              </div>

              <div className="contact-socials">
                <a href="#" aria-label="Facebook" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" aria-label="Twitter" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Instagram" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" aria-label="WhatsApp" title="WhatsApp">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
