import { useEffect, useRef } from 'react'
import PageHero from '../components/PageHero.jsx'

const compromisos = [
  { label: 'Reducir consumo de agua', pct: 5 },
  { label: 'Reducir consumo de energía', pct: 5 },
  { label: 'Disminuir publicidad impresa', pct: 50 },
  { label: 'Protección contra explotación sexual comercial de niños y niñas', pct: 100 },
  { label: 'Protección de flora y fauna', pct: 100 },
]

function ProgressBar({ label, pct }) {
  const fillRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const fill = fillRef.current
    const wrap = wrapRef.current
    if (!fill || !wrap) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${pct}%`
          observer.unobserve(wrap)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={wrapRef} style={{ marginBottom: '22px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '14px',
        color: 'var(--navy)',
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
      }}>
        <span>{label}</span>
        <span style={{ color: 'var(--gold)' }}>{pct}%</span>
      </div>
      <div style={{
        height: '10px',
        background: 'var(--paper-2)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div
          ref={fillRef}
          style={{
            width: '0%',
            height: '100%',
            background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-2) 100%)',
            transition: 'width 1.2s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function Sostenibilidad() {
  return (
    <>
      <PageHero
        title="Política de Sostenibilidad"
        breadcrumb="Inicio / Sostenibilidad"
        subtitle="Turismo responsable con el medio ambiente y las comunidades"
      />

      <section className="content-section">
        <div className="container content-narrow">
          <h2>Nuestro compromiso con el medio ambiente</h2>
          <p>
            En Turismo Universal Representaciones S.A.S. entendemos que el turismo responsable no
            solo implica ofrecer experiencias excepcionales a nuestros clientes, sino también actuar
            con conciencia ambiental y social en cada una de nuestras operaciones.
          </p>
          <p>
            Nuestra política de sostenibilidad está fundamentada en tres pilares esenciales: la
            protección del medio ambiente, la responsabilidad social y la viabilidad económica a
            largo plazo.
          </p>

          <h2>Uso eficiente de los recursos</h2>
          <p>Hemos implementado medidas para reducir el consumo de recursos naturales:</p>
          <ul>
            <li>Uso de equipos electrónicos de bajo consumo energético y apagado automático fuera del horario laboral.</li>
            <li>Instalación de grifería y sanitarios de bajo consumo de agua.</li>
            <li>Digitalización de procesos administrativos para reducir el uso de papel.</li>
            <li>Gestión adecuada de residuos con clasificación y reciclaje.</li>
            <li>Preferencia por proveedores con certificaciones ambientales vigentes.</li>
          </ul>

          <h2>Responsabilidad social</h2>
          <p>Estamos comprometidos con la protección de los derechos fundamentales:</p>
          <ul>
            <li><strong>Tolerancia cero</strong> frente a la explotación sexual comercial de niños, niñas y adolescentes (ESCNNA) asociada al turismo.</li>
            <li><strong>Turismo inclusivo:</strong> igualdad de oportunidades sin distinción de raza, género, religión, orientación sexual o condición física.</li>
            <li><strong>Apoyo a comunidades locales:</strong> priorizamos operadores y proveedores locales en los destinos que comercializamos.</li>
          </ul>

          <h2>Conservación de la biodiversidad</h2>
          <ul>
            <li>No comercializamos tours que impliquen daño, captura o tráfico de flora y fauna silvestre.</li>
            <li>Educamos a nuestros clientes sobre el comportamiento responsable en áreas naturales protegidas.</li>
            <li>Promovemos el turismo de naturaleza con guías certificados.</li>
            <li>Nos oponemos activamente al tráfico ilegal de especies.</li>
          </ul>

          <h2 style={{ marginTop: '40px' }}>Nuestros compromisos en cifras</h2>
          <div style={{ marginTop: '24px' }}>
            {compromisos.map((c, i) => (
              <ProgressBar key={i} label={c.label} pct={c.pct} />
            ))}
          </div>

          <h2>Certificaciones y alianzas</h2>
          <p>
            Turismo Universal Representaciones cuenta con el Registro Nacional de Turismo No. 29224,
            emitido por el Ministerio de Comercio, Industria y Turismo de Colombia. Trabajamos
            continuamente para mejorar nuestros indicadores ambientales y sociales.
          </p>
        </div>
      </section>
    </>
  )
}
