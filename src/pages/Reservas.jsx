import PageHero from '../components/PageHero.jsx'

export default function Reservas() {
  return (
    <>
      <PageHero title="Reservas" breadcrumb="Inicio / Reservas" />

      <div className="reservas-content">
        <div className="container">
          <p>
            Utilice nuestro sistema de reservas en línea para consultar disponibilidad, cotizar y reservar su viaje de manera rápida y segura.
          </p>
          <iframe
            src="https://www.e-agencias.com.co/turismouniversal/"
            width="100%"
            height="1150"
            style={{ border: 'none', maxWidth: '980px', display: 'block', margin: '0 auto' }}
            title="Sistema de Reservas Turismo Universal"
          />
        </div>
      </div>
    </>
  )
}
