import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const WA_VISA = 'https://wa.me/573003748933?text=Hola%2C%20necesito%20asesor%C3%ADa%20para%20mi%20solicitud%20de%20visa%20americana%20B1%2FB2'

const servicios = [
  {
    icon: 'fas fa-file-alt',
    title: 'Diligenciamiento del DS-160',
    desc: 'Te ayudamos a completar correctamente el formulario DS-160 en línea — el paso más importante y más propenso a errores en toda la solicitud.',
  },
  {
    icon: 'fas fa-search',
    title: 'Revisión de Consistencia',
    desc: 'Verificamos que todos tus datos sean consistentes entre el DS-160, tu pasaporte y los documentos de soporte. Un error de digitación puede costar la visa.',
  },
  {
    icon: 'fas fa-folder-open',
    title: 'Guía de Documentos',
    desc: 'Te indicamos exactamente qué documentos financieros, laborales y personales necesitas según tu perfil para fortalecer tu solicitud.',
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Gestión de la Cita',
    desc: 'Te orientamos en el proceso de pago del arancel MRV y la programación de la cita consular en el horario que mejor se adapte a ti.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Preparación para la Entrevista',
    desc: 'Te preparamos con las preguntas más frecuentes que hacen los cónsules, cómo presentarte y qué evitar decir para aumentar tus probabilidades de aprobación.',
  },
  {
    icon: 'fas fa-user-check',
    title: 'Asesoría Personalizada',
    desc: 'Evaluamos tu perfil específico (empleado, independiente, empresario, estudiante) y diseñamos la estrategia de solicitud más sólida para tu caso.',
  },
]

const pasos = [
  {
    num: '01',
    icon: 'fas fa-passport',
    title: 'Nos contactas',
    desc: 'Nos cuentas tu situación: tipo de viaje, ocupación, situación financiera. Evaluamos tu perfil sin compromiso.',
  },
  {
    num: '02',
    icon: 'fas fa-file-alt',
    title: 'Diligenciamos el DS-160',
    desc: 'Llenamos contigo el formulario DS-160 verificando cada campo para evitar errores que puedan generar negaciones.',
  },
  {
    num: '03',
    icon: 'fas fa-folder-open',
    title: 'Preparamos tus documentos',
    desc: 'Te indicamos qué documentos presentar y cómo organizarlos para mostrar vínculos sólidos con Colombia.',
  },
  {
    num: '04',
    icon: 'fas fa-calendar-alt',
    title: 'Agendas tu cita',
    desc: 'Te guiamos en el pago del arancel MRV y la programación de la entrevista en el consulado.',
  },
  {
    num: '05',
    icon: 'fas fa-handshake',
    title: 'Te preparamos para la entrevista',
    desc: 'Simulamos la entrevista consular y te damos las recomendaciones finales para llegar seguro y confiado.',
  },
]


export default function Visas() {
  return (
    <>
      <PageHero
        title="Asesoría de Visas"
        breadcrumb="Inicio / Visas"
        subtitle="Te acompañamos en cada paso de tu solicitud de visa americana B1/B2"
      />

      {/* Intro */}
      <section className="section visas-intro-section">
        <div className="container visas-intro-grid">
          <div className="visas-intro-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Visa Americana B1/B2 — Turismo y Negocios
            </h2>
            <p>
              La visa B1/B2 es la más solicitada por colombianos para viajar a Estados Unidos,
              ya sea por turismo, visita familiar, tratamientos médicos o viajes de negocios cortos.
              Sin embargo, el proceso puede resultar confuso, lleno de tecnicismos y propenso a errores
              que cuestan tiempo, dinero y la visa misma.
            </p>
            <p>
              En <strong>Turismo Universal Representaciones</strong> te acompañamos en todo el proceso:
              desde el diligenciamiento correcto del formulario DS-160 hasta la preparación para la
              entrevista consular. Conocemos los requisitos, sabemos qué buscan los cónsules y entendemos
              cómo presentar tu perfil de la manera más sólida posible.
            </p>
            <p>
              No tramitamos la visa por ti — eso lo hace el consulado. Lo que sí hacemos es asegurarnos
              de que vayas perfectamente preparado, con todo en orden y sin errores que pongan en riesgo
              tu solicitud.
            </p>
            <a href={WA_VISA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ marginTop: '12px', display: 'inline-flex' }}>
              <i className="fab fa-whatsapp" />
              Consultar mi caso ahora
            </a>
          </div>
          <div className="visas-intro-aside">
            <div className="visa-card-info">
              <div className="visa-card-header">
                <i className="fas fa-passport" />
                <span>Visa B1 / B2</span>
              </div>
              <ul className="visa-card-list">
                <li><i className="fas fa-check" /> Turismo y vacaciones</li>
                <li><i className="fas fa-check" /> Visita a familiares</li>
                <li><i className="fas fa-check" /> Tratamientos médicos</li>
                <li><i className="fas fa-check" /> Negocios y conferencias</li>
                <li><i className="fas fa-check" /> Cursos cortos (no acreditados)</li>
                <li><i className="fas fa-check" /> Tránsito por EE.UU.</li>
              </ul>
              <div className="visa-card-detail">
                <span><i className="fas fa-clock" /> Validez: hasta 10 años</span>
                <span><i className="fas fa-sync" /> Múltiples entradas</span>
                <span><i className="fas fa-calendar" /> Estancia: hasta 6 meses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="section visas-servicios-section">
        <div className="container">
          <h2 className="section-title">¿En qué te ayudamos?</h2>
          <p className="section-subtitle">
            Cubrimos cada etapa del proceso para que llegues a la entrevista con todo en orden
          </p>
          <div className="visas-servicios-grid">
            {servicios.map((s, i) => (
              <div className="visas-servicio-card" key={i}>
                <div className="vs-icon">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El DS-160 destacado */}
      <section className="visas-ds160-section">
        <div className="container visas-ds160-inner">
          <div className="ds160-text">
            <h2>¿Qué es el formulario DS-160 y por qué es tan importante?</h2>
            <p>
              El DS-160 es el formulario de solicitud de visa no inmigrante de los Estados Unidos.
              Es obligatorio para todas las visas de turismo, negocios y tránsito. Se diligencia
              completamente en línea en el sitio oficial del Departamento de Estado estadounidense
              y debe completarse con absoluta precisión.
            </p>
            <p>
              <strong>Un solo error en el DS-160 puede generar una negación inmediata</strong>, incluso si
              el resto de tu perfil es excelente. Preguntas sobre viajes anteriores, condenas, afiliaciones
              políticas, familiares en EE.UU. y situación laboral deben responderse con cuidado y coherencia.
            </p>
            <p>
              Nosotros te acompañamos en el diligenciamiento, revisamos cada respuesta y nos aseguramos
              de que la información sea consistente con tus documentos de soporte. El DS-160 bien hecho
              es la primera defensa en tu solicitud.
            </p>
          </div>
          <div className="ds160-highlights">
            <div className="ds160-point">
              <i className="fas fa-exclamation-triangle" />
              <div>
                <strong>Error frecuente #1</strong>
                <p>Información inconsistente entre el DS-160 y el pasaporte (nombres, fechas, datos de viaje).</p>
              </div>
            </div>
            <div className="ds160-point">
              <i className="fas fa-exclamation-triangle" />
              <div>
                <strong>Error frecuente #2</strong>
                <p>No declarar viajes anteriores a EE.UU. o a otros países, aunque hayan sido hace años.</p>
              </div>
            </div>
            <div className="ds160-point">
              <i className="fas fa-exclamation-triangle" />
              <div>
                <strong>Error frecuente #3</strong>
                <p>Responder "No aplica" en campos que sí requieren respuesta o dejar campos en blanco.</p>
              </div>
            </div>
            <div className="ds160-point">
              <i className="fas fa-lightbulb" />
              <div>
                <strong>Nuestra ayuda</strong>
                <p>Revisamos cada campo contigo, verificamos consistencia y guardamos el número de confirmación para la cita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Paso a paso */}
      <section className="section visas-pasos-section">
        <div className="container">
          <h2 className="section-title">El proceso paso a paso</h2>
          <p className="section-subtitle">Así funciona nuestro acompañamiento</p>
          <div className="visas-pasos-timeline">
            {pasos.map((p) => (
              <div className="visas-paso" key={p.num}>
                <div className="vpaso-num">{p.num}</div>
                <div className="vpaso-icon"><i className={p.icon} /></div>
                <div className="vpaso-text">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="visas-cta-section">
        <div className="container visas-cta-inner">
          <div>
            <h2>¿Vas a solicitar tu visa americana?</h2>
            <p>
              Cuéntanos tu caso y te orientamos sin compromiso. Queremos que llegues a tu entrevista
              preparado, organizado y con la mejor presentación posible.
            </p>
          </div>
          <div className="visas-cta-btns">
            <a href={WA_VISA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-lg">
              <i className="fab fa-whatsapp" />
              Iniciar asesoría
            </a>
            <Link to="/reservas" className="btn-outline-white">
              Ver más servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
