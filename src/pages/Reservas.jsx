import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const WA_BASE = 'https://wa.me/573003748933?text='

const pasos = [
  { num: '01', title: 'Completa el formulario', desc: 'Cuéntanos quién eres, a dónde quieres ir y qué buscas en tu viaje.' },
  { num: '02', title: 'Te contactamos por WhatsApp', desc: 'Un asesor experto recibe tu solicitud y te responde de manera personalizada.' },
  { num: '03', title: '¡A viajar!', desc: 'Confirmamos tu reserva y solo te queda preparar la maleta y disfrutar.' },
]

export default function Reservas() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    celular: '',
    destino: '',
    descripcion: '',
  })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mensaje =
      `Hola, me gustaría solicitar información sobre un viaje.\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Correo: ${form.correo}\n` +
      `Celular: ${form.celular}\n` +
      `País / Destino: ${form.destino}\n` +
      `Descripción: ${form.descripcion}`
    window.open(WA_BASE + encodeURIComponent(mensaje), '_blank', 'noopener,noreferrer')
  }

  const filled = form.nombre && form.celular && form.destino

  return (
    <>
      <PageHero
        title="Reservas"
        breadcrumb="Inicio / Reservas"
        subtitle="Solicita tu cotización personalizada — te contactamos por WhatsApp"
      />

      <section className="section">
        <div className="container reservas-grid">
          <div className="reservas-form-box">
            <h3>Solicita tu cotización</h3>
            <p className="form-subtitle">
              Completa los datos y te contactamos por WhatsApp con una propuesta personalizada.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="rform-group">
                <label className="rform-label" htmlFor="nombre">
                  Nombre completo <span className="rform-required">*</span>
                </label>
                <div className="form-group">
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
              </div>

              <div className="rform-row">
                <div className="rform-group">
                  <label className="rform-label" htmlFor="correo">Correo electrónico</label>
                  <div className="form-group">
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.correo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="rform-group">
                  <label className="rform-label" htmlFor="celular">
                    Celular / WhatsApp <span className="rform-required">*</span>
                  </label>
                  <div className="form-group">
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
              </div>

              <div className="rform-group">
                <label className="rform-label" htmlFor="destino">
                  País / Destino deseado <span className="rform-required">*</span>
                </label>
                <div className="form-group">
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
              </div>

              <div className="rform-group">
                <label className="rform-label" htmlFor="descripcion">Cuéntanos qué buscas</label>
                <div className="form-group">
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Fechas aproximadas, número de viajeros, tipo de viaje (luna de miel, familia, aventura...) o cualquier detalle que nos ayude."
                    value={form.descripcion}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-whatsapp btn-whatsapp-full"
                disabled={!filled}
                style={{ opacity: filled ? 1 : 0.5, cursor: filled ? 'pointer' : 'not-allowed' }}
              >
                <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
              </button>

              <p style={{ fontSize: '12.5px', color: 'var(--muted)', marginTop: '14px', textAlign: 'center' }}>
                <i className="fas fa-lock" style={{ marginRight: '5px', color: 'var(--gold)' }}></i>
                Tus datos son privados y solo se usan para contactarte.
              </p>
            </form>
          </div>

          <div className="reservas-info-box">
            <h3>¿Por qué elegirnos?</h3>
            <div className="rinfo-item">
              <div className="rinfo-icon"><i className="fas fa-award"></i></div>
              <div className="rinfo-text">
                <strong>Más de 20 años de experiencia</strong>
                <span>Conocemos cada destino y cada detalle que hace un viaje perfecto.</span>
              </div>
            </div>
            <div className="rinfo-item">
              <div className="rinfo-icon"><i className="fas fa-headset"></i></div>
              <div className="rinfo-text">
                <strong>Atención 100% personalizada</strong>
                <span>No eres un número. Diseñamos cada viaje a tu medida y tu presupuesto.</span>
              </div>
            </div>
            <div className="rinfo-item">
              <div className="rinfo-icon"><i className="fas fa-shield-alt"></i></div>
              <div className="rinfo-text">
                <strong>Registro Nacional de Turismo</strong>
                <span>RNT No. 29224 — Agencia legalmente constituida en Colombia.</span>
              </div>
            </div>
            <div className="rinfo-item">
              <div className="rinfo-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="rinfo-text">
                <strong>Respuesta rápida</strong>
                <span>Te respondemos el mismo día en horario de atención.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reservas-pasos-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">El proceso</span>
            <h2>¿Cómo funciona?</h2>
            <p>Tres pasos sencillos para empezar a planear tu próximo viaje.</p>
          </div>
          <div className="reservas-pasos-grid">
            {pasos.map((p) => (
              <div className="reservas-paso-card" key={p.num}>
                <div className="reservas-paso-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
