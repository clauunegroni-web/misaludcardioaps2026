import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Salud Cardio | Cápsulas educativas</title>
        <meta
          name="description"
          content="Educación cardiovascular para el autocuidado."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="hero">
          <div className="container">
            <p className="eyebrow">Educación para el autocuidado</p>
            <h1>Mi Salud Cardio</h1>
            <p className="lead">
              Cápsulas educativas para comprender, prevenir y cuidar la salud
              cardiovascular.
            </p>
          </div>
        </header>

        <section className="container section" aria-labelledby="capsulas-title">
          <div className="section-heading">
            <p className="eyebrow">Aprende a tu ritmo</p>
            <h2 id="capsulas-title">Cápsulas educativas</h2>
            <p>
              Información clara para acompañar el cuidado diario de tu corazón
              y tus vasos sanguíneos.
            </p>
          </div>

          <article className="capsule" aria-labelledby="presion-hdl-ldl-title">
            <div className="capsule-content">
              <span className="tag">Presión arterial y colesterol</span>
              <h3 id="presion-hdl-ldl-title">
                Presión arterial, HDL y LDL
              </h3>
              <p>
                Aprende qué significan los valores de presión arterial y cómo
                el colesterol HDL y LDL se relacionan con la salud
                cardiovascular.
              </p>
              <div className="notice" role="note">
                Este material es educativo y no reemplaza la evaluación de tu
                equipo de salud.
              </div>
            </div>

            <div className="video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Video educativo sobre presión arterial, colesterol HDL y LDL"
              >
                <source
                  src="https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4"
                  type="video/mp4"
                />
                Tu navegador no puede reproducir este video.
              </video>

              <p className="video-help">
                Presiona reproducir para ver la cápsula. Puedes pausar, ajustar
                el volumen o usar pantalla completa.
              </p>
            </div>
          </article>

          <article className="capsule" aria-labelledby="colesterol-title">
            <div className="capsule-content">
              <span className="tag">Colesterol y salud cardiovascular</span>
              <h3 id="colesterol-title">Colesterol HDL y LDL</h3>
              <p>
                Conoce la diferencia entre colesterol HDL y LDL y la importancia
                de mantener controles y hábitos de cuidado cardiovascular.
              </p>
              <div className="notice" role="note">
                Consulta tus resultados con tu equipo de salud y sigue el plan
                de tratamiento indicado.
              </div>
            </div>

            <div className="video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Video educativo sobre colesterol HDL y LDL"
              >
                <source
                  src="https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-colesterol-hdl-ldl-v1.mp4.mp4"
                  type="video/mp4"
                />
                Tu navegador no puede reproducir este video.
              </video>

              <p className="video-help">
                Presiona reproducir para ver la cápsula. Puedes pausar, ajustar
                el volumen o usar pantalla completa.
              </p>
            </div>
          </article>

          <article className="capsule" aria-labelledby="insulina-title">
            <div className="capsule-content">
              <span className="tag">Diabetes y autocuidado</span>
              <h3 id="insulina-title">Uso seguro de insulina</h3>
              <p>
                Revisa recomendaciones generales para utilizar insulina de forma
                segura y seguir el plan indicado por el equipo de salud.
              </p>
              <div className="notice" role="note">
                No ajustes dosis ni suspendas la insulina sin indicación de un
                profesional de salud.
              </div>
            </div>

            <div className="video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Video educativo sobre uso seguro de insulina"
              >
                <source
                  src="https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-insulina-v1.mp4.mp4"
                  type="video/mp4"
                />
                Tu navegador no puede reproducir este video.
              </video>

              <p className="video-help">
                Presiona reproducir para ver la cápsula. Puedes pausar, ajustar
                el volumen o usar pantalla completa.
              </p>
            </div>
          </article>

          <article className="capsule" aria-labelledby="alarmas-title">
            <div className="capsule-content">
              <span className="tag">Atención oportuna</span>
              <h3 id="alarmas-title">Señales de alarma cardiovascular</h3>
              <p>
                Reconoce síntomas que requieren atención urgente, como dolor u
                opresión en el pecho, dificultad para respirar, desmayo o
                síntomas neurológicos súbitos.
              </p>
              <div className="notice" role="note">
                Ante signos de alarma, solicita atención de urgencia de
                inmediato.
              </div>
            </div>

            <div className="video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Video educativo sobre señales de alarma cardiovascular"
              >
                <source
                  src="https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4.mp4"
                  type="video/mp4"
                />
                Tu navegador no puede reproducir este video.
              </video>

              <p className="video-help">
                Presiona reproducir para ver la cápsula. Puedes pausar, ajustar
                el volumen o usar pantalla completa.
              </p>
            </div>
          </article>
        </section>

        <footer>
          <div className="container">
            Mi Salud Cardio · Educación cardiovascular para la comunidad
          </div>
        </footer>
      </main>
    </>
  )
}
