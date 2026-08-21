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

        <section
          className="container section"
          aria-labelledby="capsulas-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Aprende a tu ritmo</p>

            <h2 id="capsulas-title">Cápsulas educativas</h2>

            <p>
              Información clara para acompañar el cuidado diario de tu corazón
              y tus vasos sanguíneos.
            </p>
          </div>

          <article className="capsule" aria-labelledby="hta-title">
            <div className="capsule-content">
              <span className="tag">Hipertensión arterial</span>

              <h3 id="hta-title">
                Cómo medir correctamente la presión arterial
              </h3>

              <p>
                Aprende a preparar tu cuerpo, sentarte correctamente y registrar
                tu resultado para obtener una medición de presión arterial más
                confiable en casa.
              </p>

              <div className="steps" aria-label="Pasos importantes">
                <p className="steps-title">Antes y durante la medición:</p>

                <ul>
                  <li>Descansa sentado o sentada al menos 5 minutos.</li>
                  <li>Apoya la espalda y ambos pies en el suelo.</li>
                  <li>Mantén el brazo apoyado a la altura del corazón.</li>
                  <li>No hables ni te muevas mientras el equipo mide.</li>
                </ul>
              </div>

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
                aria-label="Video educativo: cómo medir correctamente la presión arterial"
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
  <article className="capsule" aria-labelledby="hdl-ldl-title">
  <div className="capsule-content">
    <span className="tag">Colesterol y salud cardiovascular</span>

    <h3 id="hdl-ldl-title">Colesterol HDL y LDL</h3>

    <p>
      Aprende qué significan el colesterol HDL y LDL y por qué es importante
      controlarlos para cuidar tu corazón.
    </p>

    <video
      controls
      preload="metadata"
      playsInline
      style={{
        width: "100%",
        maxWidth: "720px",
        borderRadius: "16px",
        backgroundColor: "#000",
        display: "block",
        margin: "16px auto"
      }}
    >
      <source
        src="https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4"
        type="video/mp4"
      />
      Tu navegador no puede reproducir este video.
    </video>

    <p className="muted">Presiona ▶ para reproducir esta cápsula.</p>
  </div>
</article>
</section>
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
