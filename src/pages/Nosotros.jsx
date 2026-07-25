import PageHero from '../components/PageHero.jsx'

const servicios = [
  {
    icon: 'fas fa-hotel',
    title: 'Hoteles',
    desc: 'Tarifas preferenciales en hoteles nacionales e internacionales: Radisson, Marriott, NH Hoteles, Sheraton, Best Western, Accor y más.',
  },
  {
    icon: 'fas fa-car',
    title: 'Alquiler de Automóviles',
    desc: 'Negociaciones con Alamo, Avis, Budget, Hertz, Thrifty para brindarte las mejores tarifas en renta de vehículos.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Asistencia Médica',
    desc: 'Convenios con Qualitas Assistance, Assist Card, April/Coris para que viajes siempre protegido.',
  },
  {
    icon: 'fas fa-bus',
    title: 'Traslados',
    desc: 'Transporte hacia y desde el aeropuerto en Bogotá con servicio profesional y puntual.',
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Congresos y Eventos',
    desc: 'Asesoría, logística y organización de eventos, convenciones e incentivos corporativos.',
  },
  {
    icon: 'fas fa-ship',
    title: 'Cruceros',
    desc: 'Reservas en los mejores cruceros por todo el mundo con las principales líneas navieras.',
  },
]

export default function Nosotros() {
  return (
    <>
      <PageHero title="Nosotros" breadcrumb="Inicio / Nosotros" />

      <div className="nosotros-content">
        <div className="container">

          {/* Quiénes Somos */}
          <div className="nosotros-section">
            <h2>Quiénes Somos</h2>
            <p>
              Turismo Universal Representaciones S.A.S. es una agencia de viajes y turismo colombiana con más de dos décadas de experiencia en el mercado, dedicada a ofrecer soluciones integrales de viaje a personas naturales, familias y empresas que buscan experiencias turísticas de alta calidad.
            </p>
            <p>
              Nos especializamos en el diseño y comercialización de paquetes turísticos nacionales e internacionales, cruceros, tours especializados, traslados, hospedaje, asistencia médica de viaje y organización de eventos corporativos. Contamos con el Registro Nacional de Turismo No. 29224, que nos acredita como operadores turísticos formales ante el Ministerio de Comercio, Industria y Turismo de Colombia.
            </p>
            <p>
              Nuestra sede principal está ubicada en la ciudad de Bogotá D.C., desde donde atendemos a clientes de todo el país y coordinamos operaciones con proveedores internacionales de primera línea.
            </p>
          </div>

          {/* Historia */}
          <div className="nosotros-section">
            <h2>Nuestra Historia</h2>
            <p>
              Turismo Universal Representaciones nació de la pasión por los viajes y el deseo de facilitar a los colombianos el acceso a destinos nacionales e internacionales de manera segura, económica y personalizada. Desde nuestros inicios, hemos trabajado incansablemente para construir alianzas estratégicas con aerolíneas, cadenas hoteleras, operadores locales y empresas de servicios turísticos en todo el mundo.
            </p>
            <p>
              A lo largo de los años, hemos logrado posicionarnos como una de las agencias de viajes de mayor confianza en el mercado bogotano, gracias a nuestro compromiso con la calidad del servicio, la transparencia en la información y la atención personalizada que brindamos a cada uno de nuestros clientes.
            </p>
            <p>
              Hoy, con más de dos décadas de operación, seguimos creciendo y adaptándonos a las nuevas tendencias del turismo mundial, siempre con el mismo propósito: hacer realidad los sueños de viaje de nuestros clientes.
            </p>
          </div>

          {/* Misión */}
          <div className="nosotros-section">
            <h2>Misión</h2>
            <p>
              Nuestra misión es diseñar y ofrecer experiencias de viaje excepcionales que superen las expectativas de nuestros clientes, mediante la prestación de servicios turísticos integrales, confiables y de alta calidad. Nos comprometemos a brindar atención personalizada, asesoría experta y soluciones innovadoras que hagan de cada viaje una experiencia memorable e irrepetible.
            </p>
            <p>
              Trabajamos con responsabilidad social y ambiental, fomentando el turismo sostenible y el respeto por las culturas y ecosistemas de los destinos que operamos.
            </p>
          </div>

          {/* Visión */}
          <div className="nosotros-section">
            <h2>Visión</h2>
            <p>
              Ser reconocidos en el año 2030 como la agencia de viajes líder en Colombia en la comercialización de destinos internacionales, distinguiéndonos por la excelencia en el servicio, la innovación constante y el compromiso con el turismo sostenible.
            </p>
            <p>
              Aspiramos a expandir nuestra presencia en el mercado latinoamericano, consolidando alianzas estratégicas globales que nos permitan ofrecer a nuestros clientes acceso a los mejores destinos del mundo con las más competitivas condiciones de precio y calidad.
            </p>
          </div>

          {/* Nuestros Servicios */}
          <div className="nosotros-section">
            <h2>Nuestros Servicios</h2>
            <p>
              En Turismo Universal Representaciones ofrecemos una amplia gama de servicios turísticos diseñados para satisfacer todas las necesidades de nuestros clientes, desde el viajero individual hasta grupos corporativos:
            </p>
            <div className="servicios-grid">
              {servicios.map((s, i) => (
                <div className="servicio-card" key={i}>
                  <i className={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
