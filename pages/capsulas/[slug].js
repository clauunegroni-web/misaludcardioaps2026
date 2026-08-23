import Head from 'next/head'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { CAPSULAS } from '../../lib/capsulas'

export async function getStaticPaths() {
  return {
    paths: CAPSULAS.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const capsula = CAPSULAS.find((c) => c.slug === params.slug) || null
  return { props: { capsula } }
}

export default function CapsulaPage({ capsula }) {
  const videoRef = useRef(null)
  const [videoFalla, setVideoFalla] = useState(false)

  if (!capsula) return null

  const leerObjetivo = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const texto = `${capsula.titulo}. ${capsula.resumen} ${capsula.objetivo}`
    const utter = new SpeechSynthesisUtterance(texto)
    utter.lang = 'es-CL'
    const voces = window.speechSynthesis.getVoices()
    const femenina =
      voces.find((v) => v.lang === 'es-CL' && /female|mujer/i.test(v.name)) ||
      voces.find((v) => v.lang.startsWith('es') && /female|mujer/i.test(v.name)) ||
      voces.find((v) => v.lang.startsWith('es'))
    if (femenina) utter.voice = femenina
    utter.rate = 0.95
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
    if (videoRef.current) videoRef.current.pause()
  }

  const onPlayVideo = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  }

  return (
    <>
      <Head>
        <title>{capsula.titulo} · Mi Salud Cardio</title>
        <meta name="description" content={capsula.resumen} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className={`capsule-hero hero-${capsula.color}`}>
          <div className="container">
            <Link href="/" className="back-link">
              ← Volver a las cápsulas
            </Link>
            <p className="eyebrow">{capsula.tema}</p>
            <h1>{capsula.titulo}</h1>
            <p className="lead">{capsula.resumen}</p>
            <div className="hero-actions">
              <button
                type="button"
                onClick={leerObjetivo}
                className="btn btn-secondary"
                aria-label={`Escuchar la descripción de ${capsula.titulo}`}
              >
                🔊 Escuchar
              </button>
              <a
                href={capsula.video}
                download
                className="btn btn-ghost"
                aria-label={`Descargar el video de ${capsula.titulo}`}
              >
                ⬇ Descargar video
              </a>
            </div>
          </div>
        </header>

        <section className="container section">
          <div className={`capsule-player capsule-player-${capsula.orientacion || 'horizontal'}`}>
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster={capsula.poster}
              onPlay={onPlayVideo}
              onError={() => setVideoFalla(true)}
              aria-label={`Video: ${capsula.titulo}`}
            >
              <source src={capsula.video} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>

            {videoFalla && (
              <div className="video-fallback" role="alert">
                <p>
                  El video no se pudo reproducir aquí. Puedes verlo o
                  descargarlo directamente:
                </p>
                <a
                  href={capsula.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Abrir video en pestaña nueva
                </a>
              </div>
            )}

            <p className="video-help">
              Presiona reproducir para ver la cápsula. Puedes pausar, ajustar
              el volumen o usar pantalla completa. Duración{' '}
              {capsula.duracionTexto}.
            </p>
          </div>

          <div className="capsule-info-grid">
            <article className="info-card">
              <h2>Objetivo de esta cápsula</h2>
              <p>{capsula.objetivo}</p>
            </article>

            <article className="info-card">
              <h2>Qué vas a aprender</h2>
              <ul>
                {capsula.aprender.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>

            <article className="info-card teachback-card">
              <h2>Para practicar</h2>
              <p>{capsula.teachback}</p>
              <p className="teachback-hint">
                Conversa esta pregunta con tu química farmacéutica, tu equipo
                de salud o tu cuidador.
              </p>
            </article>

            <div className="notice" role="note">
              {capsula.aviso}
            </div>
          </div>

          <div className="capsule-nav">
            <Link href="/" className="btn btn-ghost">
              ← Ver todas las cápsulas
            </Link>
          </div>
        </section>

        <footer>
          <div className="container footer-inner">
            <p>Mi Salud Cardio · Educación cardiovascular para la comunidad</p>
            <p className="footer-attribution">
              Proyecto vinculado a la Universidad de Valparaíso, Chile.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
