import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WA = 'https://wa.me/573003748933'

const faqs = [
  {
    q: '¿Qué servicios ofrecen?',
    a: 'Ofrecemos paquetes turísticos nacionales e internacionales, cruceros, hoteles con tarifas preferenciales (Marriott, Radisson, NH, Sheraton), asistencia médica de viaje, alquiler de autos, asesoría de visas americanas B1/B2 y organización de eventos corporativos.',
  },
  {
    q: '¿Cómo reservo un viaje?',
    a: 'Puedes reservar de dos maneras: (1) llenando el formulario en la sección Reservas y te contactamos por WhatsApp con una cotización personalizada, o (2) escribiéndonos directamente al WhatsApp para hablar con un asesor.',
    action: { label: 'Ir a Reservas', link: '/reservas' },
  },
  {
    q: 'Necesito ayuda con mi visa americana',
    a: 'Te acompañamos en el diligenciamiento del DS-160, revisión de consistencia, guía de documentos y preparación para la entrevista consular. Trabajamos con visas B1/B2 (turismo y negocios).',
    action: { label: 'Ver info de visas', link: '/visas' },
  },
  {
    q: '¿A qué destinos viajan?',
    a: 'Trabajamos con destinos en Europa (Italia, España, Francia, Grecia), Asia (Vietnam, Japón, China, Tailandia, India), África (Kenia), Medio Oriente (Dubái, Jordania, Turquía), Suramérica (Buenos Aires, Perú) y cruceros por el mundo.',
    action: { label: 'Ver destinos', link: '/#destinos' },
  },
  {
    q: '¿Están registrados legalmente?',
    a: 'Sí. Contamos con el Registro Nacional de Turismo No. 29224, otorgado por el Ministerio de Comercio, Industria y Turismo de Colombia. Somos una agencia formal con más de 20 años de experiencia.',
  },
  {
    q: '¿Cuál es su horario de atención?',
    a: 'Lunes a viernes de 8:00 a.m. a 6:00 p.m. y sábados de 9:00 a.m. a 1:00 p.m. Por WhatsApp respondemos el mismo día hábil.',
  },
  {
    q: '¿Cuánto cuesta un viaje?',
    a: 'Los precios varían según destino, temporada, duración, tipo de alojamiento y número de viajeros. Para una cotización precisa te conecto con un asesor.',
    escalate: true,
  },
  {
    q: 'Otra pregunta · Hablar con un asesor',
    escalate: true,
  },
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy el asistente virtual de Turismo Universal. ¿En qué puedo ayudarte?' },
  ])
  const [showOptions, setShowOptions] = useState(true)
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, showOptions, typing])

  const handleQuestion = (faq) => {
    setMessages(prev => [...prev, { from: 'user', text: faq.q }])
    setShowOptions(false)
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      if (faq.escalate) {
        const waMsg = `Hola, tengo una consulta: ${faq.q}`
        setMessages(prev => [
          ...prev,
          {
            from: 'bot',
            text: 'Para atenderte mejor, te conecto con un asesor real por WhatsApp.',
            waLink: `${WA}?text=${encodeURIComponent(waMsg)}`,
          },
        ])
      } else {
        setMessages(prev => [
          ...prev,
          { from: 'bot', text: faq.a, action: faq.action },
        ])
      }
      setShowOptions(true)
    }, 700)
  }

  const openWA = () => {
    const text = 'Hola, me gustaría más información sobre sus servicios.'
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

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
          <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Cerrar">
            <i className="fas fa-chevron-down"></i>
          </button>
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

          {showOptions && !typing && (
            <div className="chat-options">
              <p className="chat-options-label">Elige una opción:</p>
              {faqs.map((faq, i) => (
                <button key={i} className="chat-option-btn" onClick={() => handleQuestion(faq)}>
                  {faq.q}
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
