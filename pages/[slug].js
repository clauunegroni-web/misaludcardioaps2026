import Head from 'next/head'
import Link from 'next/link'
import { ACCESOS } from '../lib/capsulas'

export async function getStaticPaths() {
  // Solo los accesos inactivos usan esta página placeholder.
  const inactivos = ACCESOS.filter((a) => !a.activo)
  return {
    paths: inactivos.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const acceso = ACCESOS.find((a) => a.slug === params.slug) || null
  return { props: { acceso } }
}

export default function Proximamente({ acceso }) {
  if (!acceso) return null

  return (
    <>
      <Head>
        <title>{acceso.titulo} · Próximamente</title>
        <meta name="description" content={`${acceso.titulo}: sección en preparación.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className={`capsule-hero hero-generico`}>
          <div className="container">
            <Link href="/" className="back-link">
              ← Volver al inicio
            </Link>
            <p className="eyebrow">Sección en preparación</p>
            <h1>{acceso.titulo}</h1>
            <p className="lead">{acceso.descripcion}</p>
          </div>
        </header>

        <section className="container section">
          <div className="proximamente-card">
            <div className="proximamente-emoji" aria-hidden="true">
              🛠️
            </div>
            <h2>Estamos preparando esta sección</h2>
            <p>
              Aún no hemos publicado este contenido en la nueva versión. Volverá
              pronto. Mientras tanto, puedes revisar las{' '}
              <Link href="/capsulas" className="inline-link">
                cápsulas educativas
              </Link>{' '}
              o hablar con tu <strong>químico farmacéutico</strong>.
            </p>

            <div className="capsule-nav">
              <Link href="/capsulas" className="btn btn-primary btn-xl">
                🎬 Ver cápsulas educativas
              </Link>
              <Link href="/" className="btn btn-ghost btn-xl on-light">
                🏠 Volver al inicio
              </Link>
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
