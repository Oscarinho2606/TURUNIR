import PageHero from '../components/PageHero.jsx'

export default function Clausulas() {
  return (
    <>
      <PageHero
        title="Cláusulas de Responsabilidad"
        breadcrumb="Inicio / Cláusulas"
        subtitle="Términos y condiciones de contratación de servicios turísticos"
      />

      <section className="content-section">
        <div className="container content-narrow">
          <h2>1. Generalidades</h2>
          <p>
            Turismo Universal Representaciones S.A.S. es una agencia de viajes y turismo debidamente
            inscrita en el Registro Nacional de Turismo con el número 29224, en cumplimiento de la
            Ley 300 de 1996 y sus decretos reglamentarios.
          </p>
          <p>
            Las presentes cláusulas regulan la relación contractual entre Turismo Universal
            Representaciones S.A.S. (en adelante "la Agencia") y sus clientes.
          </p>

          <h2>2. Responsabilidad de la Agencia</h2>
          <p>La Agencia actúa como intermediaria entre el cliente y los prestadores directos de servicios turísticos:</p>
          <ul>
            <li>La Agencia no asume responsabilidad directa por servicios prestados por terceros proveedores.</li>
            <li>Se compromete a suministrar información veraz, suficiente y oportuna.</li>
            <li>Gestionará con diligencia los reembolsos, reclamaciones y cambios según las políticas de los proveedores.</li>
            <li>Su responsabilidad no excederá el valor total pagado por el cliente.</li>
          </ul>

          <h2>3. Obligaciones del cliente</h2>
          <ul>
            <li>Suministrar información veraz, completa y oportuna al reservar.</li>
            <li>Verificar la vigencia de pasaporte, visa y vacunas antes del viaje.</li>
            <li>Cumplir con los horarios y condiciones de los proveedores.</li>
            <li>Respetar las leyes y costumbres de los países visitados.</li>
            <li>Adquirir póliza de asistencia médica y gastos de viaje internacional.</li>
          </ul>

          <h2>4. Políticas de reserva y pago</h2>
          <p>
            Para garantizar una reserva, el cliente deberá cancelar un depósito inicial. El saldo
            restante se cancelará en los plazos indicados en la cotización.
          </p>
          <p>
            Los precios están sujetos a disponibilidad y pueden cambiar hasta recibir el pago que
            garantice la tarifa. Todas las tarifas se expresan en pesos colombianos (COP) o en la
            moneda indicada en la cotización.
          </p>

          <h2>5. Políticas de cancelación y reembolso</h2>
          <ul>
            <li><strong>Más de 30 días:</strong> reembolso del valor pagado menos gastos administrativos y penalidades del proveedor.</li>
            <li><strong>Entre 15 y 30 días:</strong> penalidad del 30% del valor total, más penalidades del proveedor.</li>
            <li><strong>Menos de 15 días:</strong> penalidad hasta del 100% según condiciones de proveedores.</li>
            <li><strong>No Show:</strong> sin lugar a reembolso.</li>
          </ul>

          <h2>6. Modificaciones al itinerario</h2>
          <p>
            La Agencia se reserva el derecho de modificar itinerarios, alojamientos o proveedores
            cuando circunstancias de fuerza mayor lo requieran, procurando ofrecer alternativas de
            igual o superior calidad.
          </p>

          <h2>7. Visas y documentación</h2>
          <p>
            La obtención de visas, permisos y certificados de vacunación es responsabilidad exclusiva
            del cliente. La Agencia orienta pero no garantiza la aprobación de visas.
          </p>

          <h2>8. Seguros de viaje</h2>
          <p>
            La Agencia recomienda ampliamente la adquisición de una póliza de asistencia al viajero.
            La no adquisición exonera a la Agencia de responsabilidad por gastos derivados de
            emergencias médicas u otros imprevistos.
          </p>

          <h2>9. Fuerza mayor y caso fortuito</h2>
          <p>
            La Agencia no será responsable por incumplimientos causados por desastres naturales,
            pandemias, actos terroristas, huelgas, condiciones climáticas adversas u otros eventos
            fuera de su control.
          </p>

          <h2>10. Protección de datos personales</h2>
          <p>
            En cumplimiento de la Ley 1581 de 2012, tratamos los datos personales de manera
            confidencial y segura, únicamente para las finalidades relacionadas con la prestación
            de servicios turísticos contratados.
          </p>

          <h2>11. Ley aplicable y jurisdicción</h2>
          <p>
            Este contrato se rige por las leyes de la República de Colombia. Cualquier controversia
            será resuelta preferiblemente de manera amigable; en su defecto, las partes se someten
            a la jurisdicción de los jueces competentes de Bogotá D.C.
          </p>

          <h2>12. Aceptación</h2>
          <p>
            Al realizar una reserva, el cliente declara haber leído, entendido y aceptado todas las
            cláusulas y condiciones establecidas, así como las condiciones específicas de los
            proveedores de cada servicio.
          </p>
          <p>
            Para cualquier inquietud: <a href="mailto:turismo.universal.rep@gmail.com" style={{ color: 'var(--gold)' }}>turismo.universal.rep@gmail.com</a> · +571 527 7485.
          </p>
        </div>
      </section>
    </>
  )
}
