import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ACCESOS } from '../lib/capsulas'

const iconos = {
  aprender: '📖',
  capsulas: '🎬',
  'remedios-dia': '💊',
  imagenes: '🖼️',
  cuidador: '👨‍⚕️',
  acuerdo: '🧠',
  farmaceutico: '💬',
  'pagina-web': '🌐',
}

export default function Home() {
  const [hablando, setHablando] = useState(false)

  const escucharBienvenida = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const texto =
      'Hola. Bienvenida a Mi Salud Cardio. Esta aplicación te ayuda con tus remedios del corazón. Si tienes dudas, pregunta a tu médico o farmacéutico. Toca uno de los dibujos grandes para comenzar.'
    const utter = new SpeechSynthesisUtterance(texto)
    utter.lang = 'es-CL'
    const voces = window.speechSynthesis.getVoices()
    const femenina =
      voces.find((v) => v.lang === 'es-CL' && /female|mujer/i.test(v.name)) ||
      voces.find(
        (v) => v.lang.startsWith('es') && /female|mujer/i.test(v.name)
      ) ||
      voces.find((v) => v.lang.startsWith('es'))
    if (femenina) utter.voice = femenina
    utter.rate = 0.92
    utter.onstart = () => setHablando(true)
    utter.onend = () => setHablando(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  }

  const hrefAcceso = (a) => (a.activo ? `/${a.slug}` : `/${a.slug}`)

  return (
    <>
      <Head>
        <title>Mi Salud Cardio · Educación cardiovascular accesible</title>
        <meta
          name="description"
          content="Aplicación educativa sobre remedios y salud del corazón. Con voz, imágenes grandes y texto claro para pacientes con baja visión."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home">
        <header className="home-header">
          <div className="container">
            <div className="brand">
              <span className="brand-logo" aria-hidden="true">
                ❤️
              </span>
              <div>
                <p className="brand-title">Mi Salud Cardio</p>
                <p className="brand-sub">Accesible</p>
              </div>
            </div>
          </div>
        </header>

        <section className="welcome">
          <div className="container">
            <h1>Bienvenida a Mi Salud Cardio</h1>
            <p className="lead">Educación clara sobre tus remedios del corazón.</p>
            <p className="hola">
              Hola. Esta app te ayuda con tus remedios. Si tienes dudas,
              pregunta al médico o al farmacéutico.
            </p>

            <div className="welcome-actions">
              <button
                type="button"
                className="btn btn-ghost-dark"
                onClick={escucharBienvenida}
                aria-label="Escuchar la bienvenida en voz alta"
              >
                🔊 {hablando ? 'Escuchando…' : 'Escuchar bienvenida'}
              </button>
              <a href="#accesos" className="btn btn-primary">
                📖 Empezar a aprender
              </a>
            </div>
          </div>
        </section>

        <section id="accesos" className="accesos-section">
          <div className="container">
            <div className="accesos-header">
              <span className="hand" aria-hidden="true">
                👆
              </span>
              <div>
                <h2>¿Qué quieres hacer hoy?</h2>
                <p>Toca un dibujo grande.</p>
              </div>
            </div>

            <ul className="accesos-grid" role="list">
              {ACCESOS.map((a) => (
                <li key={a.slug} className="acceso-card-wrap">
                  <Link
                    href={hrefAcceso(a)}
                    className={`acceso-card acceso-${a.color} ${
                      a.activo ? 'acceso-activo' : 'acceso-inactivo'
                    }`}
                    aria-label={`${a.titulo}. ${a.descripcion}${
                      a.activo ? '' : ' — Próximamente.'
                    }`}
                  >
                    <div className="acceso-icono" aria-hidden="true">
                      {iconos[a.slug]}
                    </div>
                    <div className="acceso-texto">
                      <h3>{a.titulo}</h3>
                      <p>{a.descripcion}</p>
                    </div>
                    <span className="acceso-boton" aria-hidden="true">
                      Tocar
                    </span>
                    {!a.activo && (
                      <span className="acceso-badge" aria-hidden="true">
                        Próximamente
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="uv-block">
          <div className="container">
            <div className="uv-card">
              <div className="uv-logo">Universidad<br />de Valparaíso<br /><span>CHILE</span></div>
              <div className="uv-info">
                <strong>Universidad de Valparaíso</strong>
                <p>Proyecto educativo vinculado a la Universidad de Valparaíso.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="importante">
          <div className="container">
            <div className="importante-card">
              <span className="importante-icon" aria-hidden="true">
                ⓘ
              </span>
              <div>
                <strong>Importante</strong>
                <p>
                  Esta app es educativa. No te dice qué dosis tomar. Si tienes
                  dudas, habla con tu <strong>químico farmacéutico</strong> o
                  con tu <strong>médico</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>Mi Salud Cardio · Educación cardiovascular accesible</p>
            <p className="footer-sub">
              Proyecto vinculado a la Universidad de Valparaíso, Chile.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
