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
  const [hablando, setHablando] = useState(false)

  if (!capsula) return null

  const escuchar = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const utter = new SpeechSynthesisUtterance(capsula.audioTexto)
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
    if (videoRef.current) videoRef.current.pause()
    window.speechSynthesis.speak(utter)
  }

  const detener = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setHablando(false)
    }
  }

  const onPlayVideo = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setHablando(false)
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
            <Link href="/capsulas" className="back-link">
              ← Volver a las cápsulas
            </Link>
            <p className="eyebrow">{capsula.tema}</p>
            <h1>{capsula.titulo}</h1>
            <p className="lead">{capsula.resumen}</p>
            <div className="hero-actions">
              <button
                type="button"
                onClick={hablando ? detener : escuchar}
                className="btn btn-secondary btn-xl"
                aria-label={
                  hablando
                    ? `Detener el audio de ${capsula.titulo}`
                    : `Escuchar ${capsula.titulo} en voz alta`
                }
              >
                🔊 {hablando ? 'Detener audio' : 'Escuchar'}
              </button>
              {capsula.tipo === 'video' && (
                <a
                  href={capsula.video}
                  download
                  className="btn btn-ghost btn-xl"
                >
                  ⬇ Descargar video
                </a>
              )}
            </div>
          </div>
        </header>

        <section className="container section">
          {capsula.tipo === 'video' ? (
            <div className="capsule-player">
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster={capsula.imagen}
                onPlay={onPlayVideo}
                aria-label={`Video: ${capsula.titulo}`}
              >
                <source src={capsula.video} type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
              <p className="video-help">
                Presiona reproducir para ver el video. Duración{' '}
                {capsula.duracionTexto}. También puedes escuchar los pasos con
                el botón de arriba.
              </p>
            </div>
          ) : (
            <div className="capsule-image-wrap">
              <img
                src={capsula.imagen}
                alt={`Ilustración de ${capsula.titulo}`}
                className="capsule-image"
              />
              <p className="video-help">
                Presiona el botón{' '}
                <strong>🔊 Escuchar</strong> arriba para oír los pasos en voz
                alta.
              </p>
            </div>
          )}

          {capsula.infografia && (
            <figure className="capsule-infografia">
              <img
                src={capsula.infografia}
                alt={capsula.infografiaAlt || `Infografía de ${capsula.titulo}`}
                className="capsule-infografia-img"
                loading="lazy"
              />
              <figcaption className="video-help">
                Infografía educativa. Puedes ampliarla con los gestos de zoom de
                tu dispositivo.
              </figcaption>
              {capsula.infografiaNota && (
                <p className="capsule-infografia-nota" role="note">
                  <strong>Aviso:</strong> {capsula.infografiaNota}
                </p>
              )}
            </figure>
          )}

          <article className="pasos-card">
            <h2>Pasos importantes</h2>
            <ol className="pasos-lista">
              {capsula.pasos.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ol>
          </article>

          <aside className="aviso-card" role="note">
            <strong>Importante:</strong> {capsula.aviso}
          </aside>

          <div className="capsule-nav">
            <Link href="/capsulas" className="btn btn-ghost btn-xl on-light">
              ← Ver todas las cápsulas
            </Link>
            <Link href="/" className="btn btn-ghost btn-xl on-light">
              🏠 Volver al inicio
            </Link>
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
