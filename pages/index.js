import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Salud Cardio | Cápsulas educativas</title>
        <meta name="description" content="Educación cardiovascular para el autocuidado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="hero">
          <div className="container">
            <p className="eyebrow">Educación para el autocuidado</p>
            <h1>Mi Salud Cardio</h1>
            <p className="lead">Cápsulas educativas para comprender, prevenir y cuidar la salud cardiovascular.</p>
          </div>
        </header>

        <section className="container section" aria-labelledby="capsulas-title">
          <div className="section-heading">
            <p className="eyebrow">Aprende a tu ritmo</p>
            <h2 id="capsulas-title">Cápsulas educativas</h2>
            <p>Información clara para acompañar el cuidado diario de tu corazón y tus vasos sanguíneos.</p>
          </div>

          <article className="capsule" aria-labelledby="hta-title">
            <div className="capsule-content">
              <span className="tag">Hipertensión arterial</span>
              <h3 id="hta-title">Colesterol y salud cardiovascular</h3>
              <p>Conoce la diferencia entre colesterol HDL y LDL, y por qué mantenerlos controlados ayuda a proteger las arterias y disminuir el riesgo cardiovascular.</p>
              <div className="notice" role="note">
                Este material es educativo y no reemplaza la evaluación de tu equipo de salud.
              </div>
            </div>

            <div className="video-wrap">
              <video controls playsInline preload="metadata" aria-label="Video educativo sobre colesterol y salud cardiovascular">
                <source src="/videos/Diseño%20sin%20título%20(3).mp4" type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
            </div>
          </article>
        </section>

        <footer>
          <div className="container">Mi Salud Cardio · Educación cardiovascular para la comunidad</div>
        </footer>
      </main>
    </>
  )
}
