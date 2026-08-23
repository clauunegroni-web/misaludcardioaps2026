import Head from 'next/head'
import Link from 'next/link'
import { CAPSULAS } from '../lib/capsulas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Salud Cardio | Cápsulas educativas</title>
        <meta
          name="description"
          content="Videos cortos con voz y subtítulos para cuidar tu corazón. Educación cardiovascular accesible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Educación cardiovascular accesible</p>
            <h1>Mi Salud Cardio</h1>
            <p className="lead">
              Cápsulas educativas breves, con voz, subtítulos y pictogramas,
              para acompañar el cuidado diario de tu corazón.
            </p>
          </div>
        </header>

        <section
          className="container section"
          aria-labelledby="capsulas-title"
        >
          <div className="section-heading">
            <p className="eyebrow accent">Aprende a tu ritmo</p>
            <h2 id="capsulas-title">Cápsulas educativas</h2>
            <p className="section-intro">
              Videos cortos con voz y subtítulos. Cada cápsula termina con una
              pregunta corta para que practiques lo aprendido.
            </p>
          </div>

          <ul className="capsule-grid" role="list">
            {CAPSULAS.map((c) => (
              <li key={c.slug} className="capsule-card">
                <Link
                  href={`/capsulas/${c.slug}`}
                  className="capsule-link"
                  aria-label={`Ver cápsula: ${c.titulo}. Duración ${c.duracionTexto}.`}
                >
                  <div
                    className="poster"
                    style={{
                      backgroundImage: `url(${c.poster})`,
                    }}
                  >
                    <span
                      className={`tag tag-${c.color}`}
                      aria-hidden="true"
                    >
                      {c.tema}
                    </span>
                    <span className="duration" aria-hidden="true">
                      {c.duracionTexto}
                    </span>
                    <span className="play-icon" aria-hidden="true">
                      ▶
                    </span>
                  </div>
                  <div className="capsule-body">
                    <h3>{c.titulo}</h3>
                    <p>{c.resumen}</p>
                    <span className="cta">Ver cápsula →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="section-note">
            ¿Se ve lento el video? Cada cápsula tiene un botón para{' '}
            <strong>descargar</strong> el archivo y verlo sin conexión.
          </p>
        </section>

        <footer>
          <div className="container footer-inner">
            <p>
              Mi Salud Cardio · Educación cardiovascular para la comunidad
            </p>
            <p className="footer-attribution">
              Proyecto vinculado a la Universidad de Valparaíso, Chile.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
