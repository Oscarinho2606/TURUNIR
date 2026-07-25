import { useEffect, useRef } from 'react'
import PageHero from '../components/PageHero.jsx'

const compromisos = [
  { label: 'Compromiso Reducir Consumo de Agua', pct: 5 },
  { label: 'Compromiso Reducir Consumo Energía', pct: 5 },
  { label: 'Disminuir Publicidad Impresa', pct: 50 },
  { label: 'Protección Explotación Sexual Comercial Niños y Niñas', pct: 100 },
  { label: 'Protección Flora y Fauna', pct: 100 },
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
    <div className="progress-item" ref={wrapRef}>
      <div className="progress-label">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" ref={fillRef} />
      </div>
    </div>
  )
}

export default function Sostenibilidad() {
  return (
    <>
      <PageHero title="Política de Sostenibilidad" breadcrumb="Inicio / Sostenibilidad" />

      <div className="sostenibilidad-content">
        <div className="container">

          <div className="sostenibilidad-section">
            <h2>Nuestro Compromiso con el Medio Ambiente</h2>
            <p>
              En Turismo Universal Representaciones S.A.S. entendemos que el turismo responsable no solo implica ofrecer experiencias excepcionales a nuestros clientes, sino también actuar con conciencia ambiental y social en cada una de nuestras operaciones.
            </p>
            <p>
              Nuestra política de sostenibilidad está fundamentada en tres pilares esenciales: la protección del medio ambiente, la responsabilidad social y la viabilidad económica a largo plazo. Creemos firmemente que el turismo puede ser una fuerza positiva para la conservación de los ecosistemas y el bienestar de las comunidades locales.
            </p>
          </div>

          <div className="sostenibilidad-section">
            <h2>Uso Eficiente de los Recursos</h2>
            <p>
              Hemos implementado una serie de medidas orientadas a la reducción del consumo de recursos naturales en nuestras operaciones diarias:
            </p>
            <ul>
              <li>Uso de equipos electrónicos de bajo consumo energético y apagado automático de dispositivos fuera del horario laboral.</li>
              <li>Instalación de grifería y sanitarios de bajo consumo de agua en nuestras instalaciones.</li>
              <li>Digitalización de procesos administrativos para reducir el uso de papel y materiales impresos.</li>
              <li>Gestión adecuada de residuos con clasificación y reciclaje de materiales reutilizables.</li>
              <li>Uso preferente de proveedores que cuenten con certificaciones ambientales vigentes.</li>
            </ul>
          </div>

          <div className="sostenibilidad-section">
            <h2>Responsabilidad Social</h2>
            <p>
              Turismo Universal Representaciones está comprometida con la protección de los derechos fundamentales, especialmente los de la población más vulnerable:
            </p>
            <ul>
              <li>
                <strong>Código de conducta contra la explotación sexual comercial de niños, niñas y adolescentes (ESCNNA):</strong> Tenemos tolerancia cero frente a cualquier forma de explotación sexual comercial infantil asociada al turismo. Nuestros colaboradores están capacitados para identificar y reportar situaciones de riesgo.
              </li>
              <li>
                <strong>Turismo inclusivo:</strong> Promovemos la accesibilidad y la igualdad de oportunidades para todos nuestros clientes, sin distinción de raza, género, religión, orientación sexual o condición física.
              </li>
              <li>
                <strong>Apoyo a comunidades locales:</strong> Privilegiamos el trabajo con operadores y proveedores locales en los destinos que comercializamos, contribuyendo al desarrollo económico de las comunidades receptoras.
              </li>
            </ul>
          </div>

          <div className="sostenibilidad-section">
            <h2>Conservación de la Biodiversidad</h2>
            <p>
              Reconocemos la importancia de proteger los ecosistemas y la biodiversidad de los destinos turísticos que operamos. Por ello:
            </p>
            <ul>
              <li>No comercializamos tours o actividades que impliquen daño, captura o tráfico de flora y fauna silvestre.</li>
              <li>Educamos a nuestros clientes sobre el comportamiento responsable en áreas naturales protegidas.</li>
              <li>Promovemos el turismo de naturaleza con guías certificados y operadores comprometidos con la conservación.</li>
              <li>Nos oponemos activamente al tráfico ilegal de especies y cualquier actividad que atente contra la biodiversidad local.</li>
            </ul>
          </div>

          {/* Progress Bars */}
          <div className="progress-section">
            <h2>Nuestros Compromisos en Cifras</h2>
            {compromisos.map((c, i) => (
              <ProgressBar key={i} label={c.label} pct={c.pct} />
            ))}
          </div>

          <div className="sostenibilidad-section" style={{ marginTop: '40px' }}>
            <h2>Certificaciones y Alianzas</h2>
            <p>
              Turismo Universal Representaciones cuenta con el Registro Nacional de Turismo No. 29224, emitido por el Ministerio de Comercio, Industria y Turismo de Colombia, que avala nuestras operaciones dentro del marco legal vigente.
            </p>
            <p>
              Estamos comprometidos con la obtención progresiva de certificaciones de turismo sostenible y trabajamos continuamente para mejorar nuestros indicadores ambientales y sociales, contribuyendo al desarrollo de un turismo más responsable y consciente en Colombia y el mundo.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
