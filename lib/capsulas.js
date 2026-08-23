// Fuente única de verdad para las cápsulas educativas.
// URLs de video en Vercel Blob (ya subidos). Duraciones extraídas con ffprobe.
// Posters generados desde el propio MP4 (frame del segundo 2).

export const CAPSULAS = [
  {
    slug: 'insulina',
    tema: 'Diabetes y autocuidado',
    color: 'azul',
    titulo: 'Uso seguro de insulina',
    resumen:
      'Tipos de insulina, cómo aplicarla, rotación de sitios de inyección y qué hacer ante una hipoglicemia.',
    duracionTexto: '1:16',
    duracionSegundos: 76,
    poster: '/posters/insulina.jpg',
    video:
      'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-insulina-v1.mp4.mp4',
    objetivo:
      'Aplicar tu insulina de forma segura, sin errores de dosis ni de sitio de inyección.',
    aprender: [
      'Diferenciar insulinas rápidas y lentas por color de tapa.',
      'Rotar los sitios de inyección para cuidar tu piel.',
      'Reconocer una hipoglicemia y actuar a tiempo.',
    ],
    teachback:
      '¿Qué harías si te sientes con sudor frío, mareo y hambre después de ponerte insulina?',
    aviso:
      'No ajustes tu dosis ni suspendas la insulina sin indicación de un profesional de salud.',
  },
  {
    slug: 'presion',
    tema: 'Presión arterial',
    color: 'verde',
    titulo: 'Cómo medirte la presión en casa',
    resumen:
      'La postura correcta, el brazo adecuado y cómo registrar tus valores para conversarlos con tu equipo de salud.',
    duracionTexto: '0:38',
    duracionSegundos: 38,
    poster: '/posters/presion.jpg',
    video:
      'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4',
    objetivo:
      'Medir tu presión arterial en casa con una técnica confiable y saber cuándo consultar.',
    aprender: [
      'Sentarte 5 minutos antes de medir, con la espalda apoyada.',
      'Colocar el manguito en el brazo, sin ropa apretada.',
      'Anotar cada medición con hora, brazo y valor.',
    ],
    teachback:
      '¿Qué anotarías después de medir tu presión? Nombra tres cosas.',
    aviso:
      'Este material es educativo y no reemplaza la evaluación de tu equipo de salud.',
  },
  {
    slug: 'alertas',
    tema: 'Atención oportuna',
    color: 'rojo',
    titulo: 'Señales de alerta cardiovascular',
    resumen:
      'Cuándo pedir ayuda urgente: dolor de pecho, dificultad para respirar, mareo intenso o síntomas neurológicos.',
    duracionTexto: '1:34',
    duracionSegundos: 94,
    poster: '/posters/alertas.jpg',
    video:
      'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4.mp4',
    objetivo:
      'Reconocer los síntomas que exigen atención de urgencia y actuar sin demora.',
    aprender: [
      'Dolor u opresión en el pecho que no cede en pocos minutos.',
      'Falta de aire, sudor frío o desmayo súbito.',
      'Debilidad, habla enredada o cara caída en un solo lado.',
    ],
    teachback:
      '¿A qué número llamarías si alguien de tu casa presenta dolor de pecho intenso?',
    aviso:
      'Ante cualquier signo de alarma, solicita atención de urgencia de inmediato: SAMU 131.',
  },
]
