import Head from 'next/head'
import Link from 'next/link'
import { CAPSULAS } from '../../lib/capsulas'

export default function CapsulasIndex() {
  return (
    <>
      <Head>
        <title>Cápsulas educativas · Mi Salud Cardio</title>
        <meta
          name="description"
          content="Videos e imágenes cortas con voz y texto grande sobre presión arterial, insulina y emergencias."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="capsulas-hero">
          <div className="container">
            <Link href="/" className="back-link">
              ← Volver al inicio
            </Link>
            <p className="eyebrow">Aprende a tu ritmo</p>
            <h1>Cápsulas educativas</h1>
            <p className="lead">
              Videos e imágenes cortas con voz, texto grande y pasos claros
              para el cuidado diario de tu corazón.
            </p>
          </div>
        </header>

        <section className="container section">
          <ul className="capsule-grid" role="list">
            {CAPSULAS.map((c) => (
              <li key={c.slug} className="capsule-card">
                <Link
                  href={`/capsulas/${c.slug}`}
                  className="capsule-link"
                  aria-label={`${c.titulo}. ${c.resumen}`}
                >
                  <div
                    className="poster"
                    style={{ backgroundImage: `url(${c.imagen})` }}
                  >
                    <span className={`tag tag-${c.color}`} aria-hidden="true">
                      {c.tema}
                    </span>
                    {c.tipo === 'video' && (
                      <span className="duration" aria-hidden="true">
                        ▶ {c.duracionTexto}
                      </span>
                    )}
                    {c.tipo === 'imagen' && (
                      <span className="duration" aria-hidden="true">
                        🔊 Con audio
                      </span>
                    )}
                  </div>
                  <div className="capsule-body">
                    <h3>{c.titulo}</h3>
                    <p>{c.resumen}</p>
                    <span className="cta">Abrir cápsula →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
