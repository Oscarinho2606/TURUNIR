import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL
const WA = 'https://wa.me/573003748933'

const services = [
  { icon: 'fas fa-ship', title: 'Cruceros', desc: 'Reservas en las principales líneas navieras del mundo.' },
  { icon: 'fas fa-hotel', title: 'Hoteles', desc: 'Tarifas preferenciales: Radisson, Marriott, NH, Sheraton, Accor.' },
  { icon: 'fas fa-passport', title: 'Visas', desc: 'Asesoría y diligenciamiento de formularios DS-160.' },
  { icon: 'fas fa-car', title: 'Autos', desc: 'Alquiler con Alamo, Avis, Budget, Hertz y Thrifty.' },
  { icon: 'fas fa-notes-medical', title: 'Asistencia médica', desc: 'Convenios con Assist Card, Qualitas, April/Coris.' },
  { icon: 'fas fa-calendar-check', title: 'Eventos corporativos', desc: 'Logística y organización de congresos e incentivos.' },
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
  { img: `${BASE}images/promo-exclusica-disney.png`, title: 'Disney Orlando', cat: 'suramerica', slug: 'disney' },
]

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Cruceros', value: 'cruceros' },
  { label: 'Europa', value: 'europa' },
  { label: 'Suramérica', value: 'suramerica' },
  { label: 'Exóticos', value: 'exoticos' },
]

const catLabels = { cruceros: 'Cruceros', europa: 'Europa', exoticos: 'Exótico', suramerica: 'Suramérica' }

const whyUs = [
  { icon: 'fas fa-award', title: '+20 años en el mercado', desc: 'Trayectoria continua desde nuestros inicios en Bogotá, sin interrupciones.' },
  { icon: 'fas fa-file-contract', title: 'Registro Nacional de Turismo', desc: 'No. 29224 — operadores turísticos formales ante el Ministerio de Comercio, Industria y Turismo.' },
  { icon: 'fas fa-handshake', title: 'Alianzas de primera línea', desc: 'Convenios directos con aerolíneas, cadenas hoteleras y operadores internacionales.' },
  { icon: 'fas fa-user-tie', title: 'Atención personalizada', desc: 'Un asesor real te acompaña desde la cotización hasta el regreso a casa.' },
]

const aliados = ['Marriott', 'Radisson', 'NH Hoteles', 'Sheraton', 'Accor', 'Avis', 'Hertz', 'Assist Card', 'Qualitas Assistance']

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
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hola, soy ${form.name}.\n\n${form.message}\n\nCorreo: ${form.email}${form.phone ? `\nTeléfono: ${form.phone}` : ''}`
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, '_blank')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Envíanos un mensaje</h3>
      <div className="form-group">
        <input type="text" name="name" placeholder="Tu nombre completo" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Tu correo electrónico" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <input type="tel" name="phone" placeholder="Tu teléfono (opcional)" value={form.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Cuéntanos sobre el viaje que imaginas..." value={form.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
        <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
      </button>
    </form>
  )
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const servicesRef = useFadeIn()
  const destinosRef = useFadeIn()

  const filteredDestinos = activeFilter === 'all' ? destinos : destinos.filter(d => d.cat === activeFilter)

  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Agencia de viajes · Registro Nacional de Turismo No. 29224</span>
            <h1>Tu próximo viaje, en manos <em>expertas</em> desde hace más de 20 años</h1>
            <p>Diseñamos experiencias de viaje a la medida — cruceros, Europa, destinos exóticos y turismo corporativo — con el respaldo de una agencia formal y la atención de un asesor real, no un bot.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={WA} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Habla por WhatsApp
              </a>
              <a className="btn btn-outline-light" href="#destinos">
                Ver destinos <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="hero-trust">
              <div><span className="num">20+</span><span className="lbl">Años de experiencia</span></div>
              <div><span className="num">29224</span><span className="lbl">Registro Nacional de Turismo</span></div>
              <div><span className="num">15+</span><span className="lbl">Destinos activos</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-item"><i className="fas fa-shield-alt"></i> Agencia formal registrada ante MinCIT</div>
          <div className="trust-item"><i className="fas fa-headset"></i> Asesoría personalizada, no automatizada</div>
          <div className="trust-item"><i className="fas fa-hotel"></i> Tarifas con Marriott, Radisson, NH, Sheraton</div>
          <div className="trust-item"><i className="fas fa-notes-medical"></i> Asistencia médica de viaje incluida</div>
        </div>
      </div>

      {/* SERVICIOS */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Qué hacemos</span>
            <h2>Servicios integrales de viaje</h2>
            <p>De la reserva al regreso — cubrimos cada parte del viaje con proveedores de primera línea.</p>
          </div>
          <div className="services-grid fade-in" ref={servicesRef}>
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon"><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINOS */}
      <section className="section destinos-section" id="destinos">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">A dónde ir</span>
            <h2>Destinos</h2>
            <p>Desde el encanto de Europa hasta los exóticos rincones de Asia y África.</p>
          </div>
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
          <div className="destinos-grid fade-in" ref={destinosRef}>
            {filteredDestinos.map((d) => (
              <Link to={`/destinos/${d.slug}`} className="destino-card" key={d.slug}>
                <img src={d.img} alt={d.title} loading="lazy" />
                <div className="destino-overlay">
                  <div className="destino-cat">{catLabels[d.cat]}</div>
                  <h3>{d.title}</h3>
                  <span className="destino-link">Ver más <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="section" id="nosotros">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Por qué elegirnos</span>
            <h2>Confianza construida durante dos décadas</h2>
            <p>No somos los más nuevos vendiendo el destino de moda — somos los que siguen respondiendo el teléfono.</p>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-item" key={i}>
                <i className={w.icon}></i>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIADOS */}
      <div className="allies">
        <div className="container">
          <div className="allies-label">Aliados y proveedores con los que trabajamos</div>
          <div className="allies-row">
            {aliados.map(a => <span key={a} className="ally-chip">{a}</span>)}
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <section className="section contact-section" id="contacto">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--gold-2)' }}>Hablemos</span>
            <h2>Contáctenos</h2>
            <p>Estamos listos para ayudarte a planificar el viaje de tus sueños — respuesta el mismo día hábil.</p>
          </div>
          <div className="contact-grid">
            <ContactForm />
            <div className="contact-info">
              <h3>Información de contacto</h3>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Calle 147 No 7C 65 Interior 18, Bogotá — Colombia</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <span>Tel: +571 527 7485<br />Cel/WhatsApp: +57 300 374 8933</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:turismo.universal.rep@gmail.com">turismo.universal.rep@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-globe"></i>
                <a href="http://www.turunir.com" target="_blank" rel="noopener noreferrer">www.turunir.com</a>
              </div>
              <div className="contact-hours">
                <div className="contact-info-item" style={{ marginBottom: 0 }}>
                  <i className="fas fa-clock"></i>
                  <span>Lunes a viernes: 8:00 a.m. – 6:00 p.m.<br />Sábados: 9:00 a.m. – 1:00 p.m.</span>
                </div>
              </div>
              <div className="contact-socials">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
