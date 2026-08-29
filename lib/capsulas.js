export const ACCESOS = [
  { slug: 'aprender', titulo: 'Aprender de mis remedios', descripcion: 'Folletos por grupo de medicamentos.', color: 'azul', activo: false },
  { slug: 'capsulas', titulo: 'Cápsulas educativas', descripcion: 'Videos breves con voz y pictogramas.', color: 'morado', activo: true },
  { slug: 'remedios-dia', titulo: 'Mis remedios del día', descripcion: 'Agrega, revisa y comparte tus dosis.', color: 'verde', activo: false },
  { slug: 'imagenes', titulo: 'Imágenes', descripcion: 'Galería de pictogramas por rutinas.', color: 'amarillo', activo: false },
  { slug: 'acuerdo', titulo: '¿Me acuerdo?', descripcion: 'Preguntas rápidas para practicar.', color: 'durazno', activo: false },
  { slug: 'farmaceutico', titulo: 'Habla con el Farmacéutico', descripcion: 'Preguntar dudas por WhatsApp.', color: 'verde-claro', activo: false },
  { slug: 'cuidador', titulo: 'Cuidador / Farmacéutico', descripcion: 'Apoyo para quien acompaña.', color: 'rosa', activo: false },
  { slug: 'pagina-web', titulo: 'Página web', descripcion: 'Abrir la app en el navegador.', color: 'celeste', activo: false },
];

export const CAPSULAS = [
  {
    slug: 'insulina',
    titulo: 'Insulina',
    resumen: 'Qué es la insulina, sus tipos, cómo usarla, dónde aplicarla y cuándo pedir ayuda.',
    tema: 'Diabetes',
    color: 'azul',
    duracionTexto: '1:10 min',
    imagen: '/imagenes/insulina-aplicacion.jpg',
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-insulina-v1.mp4.mp4',
    audioTexto: 'Qué es la insulina, sus tipos, cómo usarla, dónde aplicarla y cuándo pedir ayuda.',
    aviso: 'No ajustes tu dosis sin indicación de tu equipo de salud.',
    pasos: []
  },
  {
    slug: 'presion-arterial',
    titulo: 'Presión arterial',
    resumen: 'Cómo tomarte la presión en casa: postura, brazo y registro.',
    tema: 'Presión arterial',
    color: 'verde',
    duracionTexto: '0:38 min',
    imagen: '/imagenes/presion-postura.jpg',
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4',
    audioTexto: 'Cómo tomarte la presión en casa: postura, brazo y registro.',
    aviso: 'Si tu presión está muy alta o tienes síntomas, consulta a tu equipo de salud.',
    pasos: []
  },
  {
    slug: 'senales-de-alerta',
    titulo: 'Señales de alerta',
    resumen: 'Reconoce cuándo pedir ayuda urgente por señales cardiovasculares.',
    tema: 'Señales de alerta',
    color: 'rojo',
    duracionTexto: '1:15 min',
    imagen: '/imagenes/parametros-pa.jpg',
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4.mp4',
    audioTexto: 'Reconoce cuándo pedir ayuda urgente por señales cardiovasculares.',
    aviso: 'Ante dolor intenso en el pecho, falta de aire o desmayo, busca atención de urgencia.',
    pasos: []
  }
];

export const CAPSULAS_EDUCATIVAS = CAPSULAS;

export default CAPSULAS;
