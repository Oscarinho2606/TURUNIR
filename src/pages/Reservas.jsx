import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const WA_BASE = 'https://wa.me/573003748933?text='

const pasos = [
  {
    icon: 'fas fa-edit',
    num: '01',
    title: 'Completa el formulario',
    desc: 'Cuéntanos quién eres, a dónde quieres ir y qué buscas en tu viaje.',
  },
  {
    icon: 'fab fa-whatsapp',
    num: '02',
    title: 'Te contactamos por WhatsApp',
    desc: 'Un asesor experto recibe tu solicitud y te responde de manera personalizada.',
  },
  {
    icon: 'fas fa-plane-departure',
    num: '03',
    title: '¡A viajar!',
    desc: 'Confirmamos tu reserva y solo te queda preparar la maleta y disfrutar.',
  },
]

export default function Reservas() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    celular: '',
    destino: '',
    descripcion: '',
  })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const mensaje =
      `Hola, me gustaría solicitar información sobre un viaje.%0A%0A` +
      `*Nombre:* ${encodeURIComponent(form.nombre)}%0A` +
      `*Correo:* ${encodeURIComponent(form.correo)}%0A` +
      `*Celular:* ${encodeURIComponent(form.celular)}%0A` +
      `*País / Destino:* ${encodeURIComponent(form.destino)}%0A` +
      `*Descripción:* ${encodeURIComponent(form.descripcion)}`
    window.open(WA_BASE + mensaje, '_blank', 'noopener,noreferrer')
  }

  const filled = form.nombre && form.celular && form.destino

  return (
    <>
      <PageHero title="Reservas" breadcrumb="Inicio / Reservas" />

      {/* Formulario + info */}
      <section className="section reservas-section">
        <div className="container reservas-grid">

          {/* Formulario */}
          <div className="reservas-form-box">
            <h2>Solicita tu cotización</h2>
            <p className="reservas-form-sub">
              Completa los datos y te contactamos por WhatsApp con una propuesta personalizada.
            </p>

            <form onSubmit={handleSubmit} className="reservas-form">
              <div className="rform-group">
                <label htmlFor="nombre">
                  <i className="fas fa-user" /> Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="rform-row">
                <div className="rform-group">
                  <label htmlFor="correo">
                    <i className="fas fa-envelope" /> Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="tu@correo.com"
                    value={form.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="rform-group">
                  <label htmlFor="celular">
                    <i className="fas fa-mobile-alt" /> Celular / WhatsApp *
                  </label>
                  <input
                    id="celular"
                    name="celular"
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={form.celular}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="rform-group">
                <label htmlFor="destino">
                  <i className="fas fa-map-marker-alt" /> País / Destino deseado *
                </label>
                <input
                  id="destino"
                  name="destino"
                  type="text"
                  placeholder="Ej: Vietnam, Europa, Dubai..."
                  value={form.destino}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="rform-group">
                <label htmlFor="descripcion">
                  <i className="fas fa-comment-dots" /> Cuéntanos qué buscas
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  placeholder="Fechas aproximadas, número de viajeros, tipo de viaje (luna de miel, familia, aventura...) o cualquier detalle que nos ayude a ayudarte mejor."
                  value={form.descripcion}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp btn-whatsapp-full"
                disabled={!filled}
              >
                <i className="fab fa-whatsapp" />
                Enviar por WhatsApp
              </button>

              <p className="rform-note">
                <i className="fas fa-lock" style={{ marginRight: '5px', color: 'var(--primary)' }} />
                Tus datos son privados y solo se usan para contactarte.
              </p>
            </form>
          </div>

          {/* Info lateral */}
          <div className="reservas-info-box">
            <h3>¿Por qué elegirnos?</h3>

            <div className="reservas-info-item">
              <div className="rinfo-icon"><i className="fas fa-award" /></div>
              <div>
                <strong>Más de 20 años de experiencia</strong>
                <p>Conocemos cada destino y cada detalle que hace un viaje perfecto.</p>
              </div>
            </div>

            <div className="reservas-info-item">
              <div className="rinfo-icon"><i className="fas fa-headset" /></div>
              <div>
                <strong>Atención 100% personalizada</strong>
                <p>No eres un número. Diseñamos cada viaje a tu medida y tu presupuesto.</p>
              </div>
            </div>

            <div className="reservas-info-item">
              <div className="rinfo-icon"><i className="fas fa-shield-alt" /></div>
              <div>
                <strong>Registro Nacional de Turismo</strong>
                <p>RNT No. 29224 — Agencia legalmente constituida en Colombia.</p>
              </div>
            </div>

            <div className="reservas-info-item">
              <div className="rinfo-icon"><i className="fab fa-whatsapp" /></div>
              <div>
                <strong>Respuesta rápida</strong>
                <p>Te respondemos el mismo día en horario de atención.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="section reservas-pasos-section">
        <div className="container">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <div className="reservas-pasos-grid">
            {pasos.map((paso) => (
              <div className="reservas-paso-card" key={paso.num}>
                <div className="paso-num">{paso.num}</div>
                <div className="paso-icon">
                  <i className={paso.icon} />
                </div>
                <h3>{paso.title}</h3>
                <p>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
