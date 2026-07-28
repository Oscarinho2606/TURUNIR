import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WA = 'https://wa.me/573003748933'

// Conversation tree — each node has: an answer (text), optional action link,
// and follow-up options relevant to that topic.
const tree = {
  root: {
    text: '¡Hola! Soy el asistente virtual de Turismo Universal. ¿En qué puedo ayudarte hoy?',
    options: [
      { label: '¿Qué servicios ofrecen?', next: 'servicios' },
      { label: 'Quiero reservar un viaje', next: 'reservar' },
      { label: 'Ayuda con visa americana', next: 'visas' },
      { label: '¿A qué destinos viajan?', next: 'destinos' },
      { label: 'Sobre la agencia', next: 'agencia' },
      { label: 'Hablar con un asesor', escalate: true },
    ],
  },

  /* ===== SERVICIOS ===== */
  servicios: {
    text: 'Ofrecemos: paquetes turísticos nacionales e internacionales, cruceros, hoteles con tarifas preferenciales, asistencia médica de viaje, alquiler de autos, asesoría de visas B1/B2 y organización de eventos corporativos. ¿Sobre cuál quieres saber más?',
    options: [
      { label: 'Cruceros', next: 'cruceros' },
      { label: 'Hoteles', next: 'hoteles' },
      { label: 'Asistencia médica', next: 'asistencia' },
      { label: 'Alquiler de autos', next: 'autos' },
      { label: 'Eventos corporativos', next: 'eventos' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  cruceros: {
    text: 'Trabajamos con las principales navieras del mundo (Royal Caribbean, MSC, Celebrity). Para 2026 tenemos itinerarios en el Mediterráneo (Santorini, Mykonos, Venecia), Caribe tropical, Fiordos Noruegos, Alaska y Canal de Panamá. Duración desde 7 hasta 21 noches.',
    action: { label: 'Ver info de cruceros', link: '/destinos/cruceros' },
    options: [
      { label: 'Cotizar un crucero', escalate: true, waMsg: 'Hola, quiero cotizar un crucero.' },
      { label: 'Ver otros servicios', next: 'servicios' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  hoteles: {
    text: 'Tenemos tarifas preferenciales con las principales cadenas: Marriott, Radisson, NH, Sheraton, Best Western y Accor. Reservamos habitaciones tanto para viajes individuales como para grupos corporativos.',
    options: [
      { label: 'Reservar un hotel', escalate: true, waMsg: 'Hola, necesito reservar un hotel.' },
      { label: 'Ver otros servicios', next: 'servicios' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  asistencia: {
    text: 'Ofrecemos pólizas de asistencia médica de viaje con Assist Card, Qualitas Assistance y April/Coris. Cubren emergencias médicas, pérdida de equipaje, cancelación de viaje y más. Recomendamos ampliamente contratarla para todo viaje internacional.',
    options: [
      { label: 'Cotizar asistencia médica', escalate: true, waMsg: 'Hola, quiero cotizar asistencia médica de viaje.' },
      { label: 'Ver otros servicios', next: 'servicios' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  autos: {
    text: 'Alquilamos autos con las principales rentadoras: Alamo, Avis, Budget, Hertz y Thrifty. Puedes reservar el auto antes de viajar y recogerlo directamente en tu destino.',
    options: [
      { label: 'Cotizar un auto', escalate: true, waMsg: 'Hola, quiero cotizar alquiler de auto.' },
      { label: 'Ver otros servicios', next: 'servicios' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  eventos: {
    text: 'Organizamos congresos, convenciones, viajes de incentivo y eventos corporativos completos: aéreos, hoteles, traslados, salones y coordinación en destino. Trabajamos tanto grupos pequeños como grandes delegaciones.',
    options: [
      { label: 'Solicitar propuesta corporativa', escalate: true, waMsg: 'Hola, necesito una propuesta para un evento corporativo.' },
      { label: 'Ver otros servicios', next: 'servicios' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },

  /* ===== RESERVAR ===== */
  reservar: {
    text: 'El proceso es sencillo: (1) llenas el formulario de Reservas con tus datos y destino deseado, (2) te contactamos por WhatsApp con la cotización personalizada, (3) confirmas y aseguramos tu viaje. ¿Qué necesitas saber?',
    action: { label: 'Ir al formulario', link: '/reservas' },
    options: [
      { label: '¿Qué formas de pago aceptan?', next: 'pago' },
      { label: 'Políticas de cancelación', next: 'cancelacion' },
      { label: 'Cotizar ya por WhatsApp', escalate: true, waMsg: 'Hola, quiero cotizar un viaje.' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  pago: {
    text: 'Aceptamos transferencias bancarias, consignaciones, tarjetas de crédito (según servicio) y pago en oficina. Al confirmar la reserva se solicita un depósito inicial y el saldo restante se cancela en los plazos indicados en la cotización.',
    options: [
      { label: 'Políticas de cancelación', next: 'cancelacion' },
      { label: 'Hablar con un asesor', escalate: true },
      { label: '← Volver a reservar', next: 'reservar' },
    ],
  },
  cancelacion: {
    text: 'Las cancelaciones se rigen por las políticas de cada proveedor. En términos generales: más de 30 días → reembolso menos gastos; 15-30 días → penalidad del 30%; menos de 15 días → hasta el 100%. Puedes ver el detalle completo en nuestras cláusulas.',
    action: { label: 'Ver cláusulas completas', link: '/clausulas' },
    options: [
      { label: 'Hablar con un asesor', escalate: true },
      { label: '← Volver a reservar', next: 'reservar' },
    ],
  },

  /* ===== VISAS ===== */
  visas: {
    text: 'Somos expertos en asesoría de visa americana B1/B2 (turismo y negocios). Te acompañamos en todo el proceso para maximizar tus probabilidades de aprobación.',
    action: { label: 'Ver página de Visas', link: '/visas' },
    options: [
      { label: '¿Qué es el DS-160?', next: 'ds160' },
      { label: '¿Qué documentos necesito?', next: 'docsVisa' },
      { label: '¿En qué me ayudan exactamente?', next: 'ayudaVisa' },
      { label: 'Iniciar asesoría por WhatsApp', escalate: true, waMsg: 'Hola, necesito asesoría para mi solicitud de visa americana B1/B2.' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  ds160: {
    text: 'El DS-160 es el formulario de solicitud de visa no inmigrante de EE.UU. Se diligencia en línea y es el documento más importante del proceso — un solo error puede generar una negación. Nosotros lo llenamos contigo verificando cada campo.',
    options: [
      { label: '¿Qué documentos necesito?', next: 'docsVisa' },
      { label: 'Iniciar asesoría', escalate: true, waMsg: 'Hola, quiero asesoría con mi DS-160.' },
      { label: '← Volver a visas', next: 'visas' },
    ],
  },
  docsVisa: {
    text: 'Los documentos varían según tu perfil (empleado, independiente, empresario, estudiante). En general se solicitan: pasaporte vigente, foto reciente, comprobante del pago del arancel MRV y documentos de soporte que muestren vínculos sólidos con Colombia. En la asesoría te decimos exactamente qué necesitas.',
    options: [
      { label: '¿En qué me ayudan?', next: 'ayudaVisa' },
      { label: 'Iniciar asesoría', escalate: true, waMsg: 'Hola, necesito ayuda con los documentos para mi visa.' },
      { label: '← Volver a visas', next: 'visas' },
    ],
  },
  ayudaVisa: {
    text: 'Cubrimos: diligenciamiento del DS-160, revisión de consistencia, guía de documentos según tu perfil, orientación en el pago del MRV, programación de la cita, y preparación para la entrevista consular con simulación de preguntas frecuentes.',
    action: { label: 'Ver detalle en Visas', link: '/visas' },
    options: [
      { label: 'Iniciar asesoría por WhatsApp', escalate: true, waMsg: 'Hola, necesito asesoría para mi solicitud de visa americana B1/B2.' },
      { label: '← Volver a visas', next: 'visas' },
    ],
  },

  /* ===== DESTINOS ===== */
  destinos: {
    text: 'Tenemos experiencia en más de 15 destinos. ¿Qué región te interesa?',
    action: { label: 'Ver todos los destinos', link: '/#destinos' },
    options: [
      { label: 'Europa', next: 'europa' },
      { label: 'Asia (Japón, Vietnam, China, Tailandia, India)', next: 'asia' },
      { label: 'Medio Oriente (Dubái, Jordania, Turquía)', next: 'medioOriente' },
      { label: 'África (Kenia)', next: 'africa' },
      { label: 'Suramérica (Buenos Aires, Perú)', next: 'suramerica' },
      { label: 'Cruceros', next: 'cruceros' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  europa: {
    text: 'Trabajamos Europa clásica (Italia, España, Francia, Grecia, Alemania, Países Bajos, República Checa, Portugal). La mejor época es de abril a octubre. Duración típica: 10 a 21 días. Perfecta para primera vez o viajes en profundidad.',
    action: { label: 'Ver Europa', link: '/destinos/europa' },
    options: [
      { label: 'Cotizar Europa', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Europa.' },
      { label: 'Ver otros destinos', next: 'destinos' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  asia: {
    text: 'En Asia trabajamos Vietnam (Oct-Abr), Japón (evitar Golden Week Apr 29-May 5), China (evitar Golden Week Oct 1-7), Tailandia (Nov-Feb, evitar Chiang Mai Ene-Mar) e India (Nov-Mar). Cada destino tiene su magia y su mejor época.',
    action: { label: 'Ver destinos de Asia', link: '/#destinos' },
    options: [
      { label: 'Cotizar Japón', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Japón.' },
      { label: 'Cotizar Vietnam', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Vietnam.' },
      { label: 'Cotizar Tailandia', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Tailandia.' },
      { label: 'Otro destino de Asia', next: 'destinos' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  medioOriente: {
    text: 'Dubái (mejor Nov-Mar, con Ain Dubai la noria más alta del mundo), Jordania (con el Jordan Pass que incluye visa + 40 atracciones y Petra) y Turquía (Estambul + Capadocia con hasta 150 globos al amanecer). Combinables entre sí.',
    action: { label: 'Ver destinos', link: '/#destinos' },
    options: [
      { label: 'Cotizar Dubái', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Dubái.' },
      { label: 'Cotizar Turquía + Capadocia', escalate: true, waMsg: 'Hola, quiero cotizar Turquía y Capadocia.' },
      { label: 'Cotizar Jordania', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Jordania.' },
      { label: '← Ver otros destinos', next: 'destinos' },
    ],
  },
  africa: {
    text: 'Kenia es nuestro destino africano estrella: safari en Masai Mara con la Gran Migración (1.5 millones de ñus). Los cruces de río son más intensos entre agosto y septiembre. Mínimo recomendado: 3-4 noches de safari.',
    action: { label: 'Ver Kenia', link: '/destinos/kenia' },
    options: [
      { label: 'Cotizar safari en Kenia', escalate: true, waMsg: 'Hola, quiero cotizar un safari en Kenia.' },
      { label: '← Ver otros destinos', next: 'destinos' },
    ],
  },
  suramerica: {
    text: 'Buenos Aires (con la Avenida 9 de Julio, la más ancha del mundo), Lima Aventurera (con Machu Picchu — reservar 4-6 meses antes, Salkantay Trek, Laguna Humantay) y Lima Experiencia gastronómica (¡Lima será sede del World\'s 50 Best Restaurants el 4 de noviembre de 2026!).',
    action: { label: 'Ver destinos', link: '/#destinos' },
    options: [
      { label: 'Cotizar Machu Picchu', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Machu Picchu.' },
      { label: 'Cotizar Buenos Aires', escalate: true, waMsg: 'Hola, quiero cotizar un viaje a Buenos Aires.' },
      { label: 'Cotizar Lima gastronómica', escalate: true, waMsg: 'Hola, quiero cotizar un tour gastronómico en Lima.' },
      { label: '← Ver otros destinos', next: 'destinos' },
    ],
  },

  /* ===== AGENCIA ===== */
  agencia: {
    text: 'Somos Turismo Universal Representaciones S.A.S., agencia de viajes colombiana con más de 20 años de experiencia y sede en Bogotá. ¿Qué te gustaría saber?',
    options: [
      { label: '¿Están registrados legalmente?', next: 'rnt' },
      { label: '¿Cuál es su horario de atención?', next: 'horarios' },
      { label: '¿Dónde están ubicados?', next: 'ubicacion' },
      { label: 'Ver página Nosotros', link: '/nosotros' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  rnt: {
    text: 'Sí. Contamos con el Registro Nacional de Turismo No. 29224, otorgado por el Ministerio de Comercio, Industria y Turismo de Colombia. Somos una agencia formal, legalmente constituida, con más de dos décadas de operación continua.',
    options: [
      { label: 'Ver cláusulas de responsabilidad', link: '/clausulas' },
      { label: '← Volver a la agencia', next: 'agencia' },
      { label: 'Hablar con un asesor', escalate: true },
    ],
  },
  horarios: {
    text: 'Lunes a viernes de 8:00 a.m. a 6:00 p.m. y sábados de 9:00 a.m. a 1:00 p.m. Por WhatsApp respondemos el mismo día hábil dentro del horario de atención.',
    options: [
      { label: 'Ver ubicación', next: 'ubicacion' },
      { label: 'Escribir por WhatsApp', escalate: true, waMsg: 'Hola, quiero información sobre sus servicios.' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
  ubicacion: {
    text: 'Nuestra sede está en Calle 147 No 7C 65 Interior 18, Bogotá – Colombia. Tel: +571 527 7485 · Cel/WhatsApp: +57 300 374 8933 · Correo: turismo.universal.rep@gmail.com',
    options: [
      { label: 'Horarios de atención', next: 'horarios' },
      { label: 'Escribir por WhatsApp', escalate: true, waMsg: 'Hola, quiero información sobre sus servicios.' },
      { label: '← Volver al menú', next: 'root' },
    ],
  },
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: tree.root.text },
  ])
  const [currentNode, setCurrentNode] = useState('root')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, typing, currentNode])

  const handleOption = (opt) => {
    // Push user message
    setMessages(prev => [...prev, { from: 'user', text: opt.label }])
    setCurrentNode(null) // hide options while "typing"
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      if (opt.escalate) {
        const waMsg = opt.waMsg || 'Hola, quiero hablar con un asesor sobre sus servicios.'
        setMessages(prev => [
          ...prev,
          {
            from: 'bot',
            text: 'Perfecto, te conecto con un asesor real por WhatsApp para ayudarte mejor.',
            waLink: `${WA}?text=${encodeURIComponent(waMsg)}`,
          },
        ])
        // Stay in current view but offer back to root
        setCurrentNode('escalated')
      } else if (opt.link) {
        setMessages(prev => [
          ...prev,
          {
            from: 'bot',
            text: 'Aquí te llevo a la sección que te interesa:',
            action: { label: opt.label.replace('Ver ', 'Ir a '), link: opt.link },
          },
        ])
        setCurrentNode('escalated')
      } else if (opt.next && tree[opt.next]) {
        const node = tree[opt.next]
        setMessages(prev => [
          ...prev,
          {
            from: 'bot',
            text: node.text,
            action: node.action,
          },
        ])
        setCurrentNode(opt.next)
      }
    }, 650)
  }

  const openWA = () => {
    const text = 'Hola, me gustaría más información sobre sus servicios.'
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const restart = () => {
    setMessages([{ from: 'bot', text: tree.root.text }])
    setCurrentNode('root')
  }

  const activeNode = currentNode && tree[currentNode] ? tree[currentNode] : null
  const escalatedOptions = currentNode === 'escalated' ? [
    { label: '← Volver al menú principal', next: 'root' },
    { label: 'Hablar con un asesor', escalate: true },
  ] : null

  return (
    <>
      <button
        className={`chatbot-fab${open ? ' open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat de ayuda'}
      >
        {open ? <i className="fas fa-times"></i> : <i className="fas fa-comments"></i>}
        {!open && <span className="chatbot-fab-dot"></span>}
      </button>

      <div className={`chatbot-window${open ? ' open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar"><i className="fas fa-headset"></i></div>
            <div className="chatbot-header-text">
              <strong>Asistente Turunir</strong>
              <span><span className="chatbot-online-dot"></span> En línea</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button className="chatbot-close" onClick={restart} aria-label="Reiniciar chat" title="Reiniciar">
              <i className="fas fa-redo"></i>
            </button>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Cerrar">
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="chatbot-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg-${m.from}`}>
              {m.from === 'bot' && (
                <div className="chat-avatar-mini"><i className="fas fa-headset"></i></div>
              )}
              <div className="chat-msg-bubble">
                <p>{m.text}</p>
                {m.action && (
                  <Link to={m.action.link} className="chat-msg-action" onClick={() => setOpen(false)}>
                    {m.action.label} <i className="fas fa-arrow-right"></i>
                  </Link>
                )}
                {m.waLink && (
                  <a href={m.waLink} target="_blank" rel="noopener noreferrer" className="chat-msg-wa">
                    <i className="fab fa-whatsapp"></i> Abrir WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="chat-msg chat-msg-bot">
              <div className="chat-avatar-mini"><i className="fas fa-headset"></i></div>
              <div className="chat-msg-bubble chat-typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}

          {!typing && (activeNode || escalatedOptions) && (
            <div className="chat-options">
              <p className="chat-options-label">Elige una opción:</p>
              {(activeNode?.options || escalatedOptions).map((opt, i) => (
                <button key={i} className="chat-option-btn" onClick={() => handleOption(opt)}>
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="chatbot-footer">
          <button className="chatbot-wa-cta" onClick={openWA}>
            <i className="fab fa-whatsapp"></i> Hablar por WhatsApp
          </button>
        </div>
      </div>
    </>
  )
}
