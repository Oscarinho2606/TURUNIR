import PageHero from '../components/PageHero.jsx'

const servicios = [
  { icon: 'fas fa-hotel', title: 'Hoteles', desc: 'Tarifas preferenciales con Radisson, Marriott, NH, Sheraton, Best Western, Accor y más.' },
  { icon: 'fas fa-car', title: 'Alquiler de autos', desc: 'Convenios con Alamo, Avis, Budget, Hertz y Thrifty para tarifas competitivas.' },
  { icon: 'fas fa-heartbeat', title: 'Asistencia médica', desc: 'Convenios con Qualitas Assistance, Assist Card y April/Coris.' },
  { icon: 'fas fa-bus', title: 'Traslados', desc: 'Transporte hacia y desde el aeropuerto en Bogotá con servicio profesional.' },
  { icon: 'fas fa-calendar-check', title: 'Congresos y eventos', desc: 'Logística y organización de eventos, convenciones e incentivos corporativos.' },
  { icon: 'fas fa-ship', title: 'Cruceros', desc: 'Reservas en las principales líneas navieras del mundo.' },
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        title="Nosotros"
        breadcrumb="Inicio / Nosotros"
        subtitle="Más de dos décadas construyendo experiencias de viaje memorables"
      />

      <section className="content-section">
        <div className="container content-narrow">
          <h2>Quiénes somos</h2>
          <p>
            Turismo Universal Representaciones S.A.S. es una agencia de viajes y turismo colombiana con
            más de dos décadas de experiencia, dedicada a ofrecer soluciones integrales de viaje a
            personas naturales, familias y empresas que buscan experiencias turísticas de alta calidad.
          </p>
          <p>
            Nos especializamos en el diseño y comercialización de paquetes turísticos nacionales e
            internacionales, cruceros, tours especializados, traslados, hospedaje, asistencia médica de
            viaje y organización de eventos corporativos. Contamos con el Registro Nacional de Turismo
            No. 29224, que nos acredita como operadores turísticos formales ante el Ministerio de
            Comercio, Industria y Turismo de Colombia.
          </p>
          <p>
            Nuestra sede principal está ubicada en Bogotá D.C., desde donde atendemos a clientes de todo
            el país y coordinamos operaciones con proveedores internacionales de primera línea.
          </p>

          <h2>Nuestra historia</h2>
          <p>
            Nacimos de la pasión por los viajes y el deseo de facilitar a los colombianos el acceso a
            destinos nacionales e internacionales de manera segura y personalizada. Desde nuestros
            inicios, hemos construido alianzas estratégicas con aerolíneas, cadenas hoteleras y
            operadores locales en todo el mundo.
          </p>
          <p>
            Hoy, con más de dos décadas de operación, seguimos creciendo y adaptándonos a las nuevas
            tendencias del turismo mundial, siempre con el mismo propósito: hacer realidad los sueños
            de viaje de nuestros clientes.
          </p>

          <h2>Misión</h2>
          <p>
            Diseñar y ofrecer experiencias de viaje excepcionales que superen las expectativas de
            nuestros clientes, mediante la prestación de servicios turísticos integrales, confiables y
            de alta calidad, con atención personalizada, asesoría experta y compromiso con el turismo
            sostenible.
          </p>

          <h2>Visión</h2>
          <p>
            Ser reconocidos en 2030 como la agencia de viajes líder en Colombia en la comercialización
            de destinos internacionales, distinguiéndonos por la excelencia en el servicio, la
            innovación constante y el compromiso con el turismo sostenible.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Qué hacemos</span>
            <h2>Nuestros servicios</h2>
            <p>Una gama completa de servicios turísticos, desde el viajero individual hasta grupos corporativos.</p>
          </div>
          <div className="services-grid">
            {servicios.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon"><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
