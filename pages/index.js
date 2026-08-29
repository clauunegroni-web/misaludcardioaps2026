import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ACCESOS } from '../lib/capsulas'

// Ilustraciones SVG estilo 3D pastel para cada acceso.
// Reemplazan los emojis planos con dibujos ricos, coherentes con la portada aprobada.
const Ilustraciones = {
  aprender: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <rect x="8" y="14" width="48" height="40" rx="6" fill="#DBEAFE" stroke="#1D4ED8" strokeWidth="2"/>
      <path d="M32 18 V50" stroke="#1D4ED8" strokeWidth="2"/>
      <path d="M12 22 H28 M12 28 H26 M12 34 H28" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 22 H52 M36 28 H50 M36 34 H52" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="46" cy="44" r="6" fill="#EF4444"/>
      <path d="M43 44 L45 46 L49 42" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  capsulas: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <rect x="6" y="12" width="52" height="34" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      <rect x="10" y="16" width="44" height="26" rx="3" fill="#F5F3FF"/>
      <polygon points="27,22 27,36 40,29" fill="#7C3AED"/>
      <rect x="20" y="50" width="24" height="4" rx="2" fill="#7C3AED"/>
      <rect x="14" y="52" width="36" height="2" rx="1" fill="#A78BFA"/>
    </svg>
  ),
  'remedios-dia': (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <rect x="10" y="18" width="20" height="30" rx="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <rect x="10" y="30" width="20" height="18" rx="0" fill="#FCA5A5"/>
      <rect x="34" y="18" width="20" height="30" rx="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" transform="rotate(20 44 33)"/>
      <circle cx="18" cy="26" r="1.5" fill="#fff"/>
      <circle cx="22" cy="24" r="1.2" fill="#fff"/>
    </svg>
  ),
  imagenes: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <rect x="8" y="12" width="48" height="40" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2"/>
      <circle cx="20" cy="24" r="4" fill="#F59E0B"/>
      <path d="M12 46 L24 32 L34 42 L44 30 L52 46 Z" fill="#FBBF24"/>
      <rect x="8" y="12" width="48" height="8" fill="#F59E0B"/>
      <circle cx="14" cy="16" r="1.5" fill="#fff"/>
      <circle cx="20" cy="16" r="1.5" fill="#fff"/>
      <circle cx="26" cy="16" r="1.5" fill="#fff"/>
    </svg>
  ),
  cuidador: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <circle cx="22" cy="24" r="8" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2"/>
      <path d="M10 52 C10 42 14 38 22 38 C30 38 34 42 34 52 Z" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2"/>
      <circle cx="44" cy="20" r="6" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2"/>
      <path d="M36 50 C36 42 40 38 44 38 C48 38 52 42 52 50 Z" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2"/>
      <path d="M40 24 L48 24 M44 20 L44 28" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  acuerdo: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <path d="M32 8 C22 8 14 16 14 26 C14 32 17 36 19 39 L19 46 C19 48 21 50 23 50 L41 50 C43 50 45 48 45 46 L45 39 C47 36 50 32 50 26 C50 16 42 8 32 8 Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="2"/>
      <circle cx="26" cy="24" r="2" fill="#EA580C"/>
      <circle cx="38" cy="24" r="2" fill="#EA580C"/>
      <path d="M24 32 Q32 38 40 32" stroke="#EA580C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="32" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="#EA580C">?</text>
    </svg>
  ),
  farmaceutico: (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill="#D1FAE5" stroke="#059669" strokeWidth="2"/>
      <path d="M32 12 C22 12 14 20 14 30 C14 34 16 38 18 40 L14 48 L24 44 C26 45 29 46 32 46 C42 46 50 38 50 30 C50 20 42 12 32 12 Z" fill="#A7F3D0"/>
      <path d="M32 22 V38 M24 30 H40" stroke="#059669" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  'pagina-web': (
    <svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#CFFAFE" stroke="#0891B2" strokeWidth="2"/>
      <ellipse cx="32" cy="32" rx="10" ry="22" fill="none" stroke="#0891B2" strokeWidth="1.5"/>
      <ellipse cx="32" cy="32" rx="22" ry="10" fill="none" stroke="#0891B2" strokeWidth="1.5"/>
      <path d="M10 32 H54" stroke="#0891B2" strokeWidth="1.5"/>
      <path d="M32 10 V54" stroke="#0891B2" strokeWidth="1.5"/>
    </svg>
  ),
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
              <a
                href="/capsulas"
                className="btn btn-video"
                aria-label="Acceso a videos educativos: cómo tomar la presión, emergencia cardíaca e insulina"
              >
                🎬 Acceso a videos
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
                      {Ilustraciones[a.slug]}
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
