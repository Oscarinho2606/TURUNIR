import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    img: '/images/cruceros.png',
    title: 'Cruceros por el Mundo',
    subtitle: 'Descubre los mejores destinos en crucero',
    btn: 'Ver Cruceros',
    link: '/#destinos',
  },
  {
    img: '/images/europa-turismo-universal.png',
    title: 'Descubre Europa',
    subtitle: 'Los mejores paquetes turísticos a Europa',
    btn: 'Ver Europa',
    link: '/#destinos',
  },
  {
    img: '/images/ofertas-turismo-universal.png',
    title: 'Ofertas Especiales',
    subtitle: 'Promociones exclusivas para tu próximo viaje',
    btn: 'Ver Ofertas',
    link: '/#ofertas',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length)
      }, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const handleHashClick = (e, link) => {
    e.preventDefault()
    const hash = link.split('#')[1]
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide${current === i ? ' active' : ''}`}
        >
          <img src={slide.img} alt={slide.title} />
          <div className="hero-overlay" />
          <div className="hero-caption">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a
              href={slide.link}
              className="btn-primary"
              onClick={e => handleHashClick(e, slide.link)}
            >
              {slide.btn}
            </a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="hero-arrow prev" onClick={prev} aria-label="Anterior">
        <i className="fas fa-chevron-left" />
      </button>
      <button className="hero-arrow next" onClick={next} aria-label="Siguiente">
        <i className="fas fa-chevron-right" />
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${current === i ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
