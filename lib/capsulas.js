export const ACCESOS = [
  {
    slug: 'aprender-de-mis-remedios',
    titulo: 'Aprender de mis remedios',
    descripcion: 'Fotos e información sobre medicamentos.',
    icono: '👨‍⚕️',
    url: '/aprender'
  },
  {
    slug: 'capsulas-educativas',
    titulo: 'Cápsulas educativas',
    descripcion: 'Videos cortos con voz, subtítulos y pictogramas.',
    icono: '🎬',
    url: '/capsulas'
  },
  {
    slug: 'mis-remedios-del-dia',
    titulo: 'Mis remedios del día',
    descripcion: 'Agrega, dosis y comparte la lista.',
    icono: '⏰',
    url: '/mis-remedios'
  },
  {
    slug: 'imagenes',
    titulo: 'Imágenes',
    descripcion: 'Galería de las imágenes para tu salud.',
    icono: '🖼️',
    url: '/imagenes'
  },
  {
    slug: 'se-me-olvido',
    titulo: '¿Se me olvidó?',
    descripcion: 'Respuestas a preguntas frecuentes.',
    icono: '❓',
    url: '/preguntas'
  },
  {
    slug: 'hablar-con-farmaceutico',
    titulo: 'Hablar con el Farmacéutico',
    descripcion: 'Preguntar dudas por WhatsApp.',
    icono: '💬',
    url: '/whatsapp'
  },
  {
    slug: 'cuidador-farmaceutico',
    titulo: 'Cuidador / Farmacéutico',
    descripcion: 'Espacio para quien te acompaña.',
    icono: '🤝',
    url: '/cuidador'
  },
  {
    slug: 'pagina-web',
    titulo: 'Página web',
    descripcion: 'Abre la app en el navegador.',
    icono: '🌐',
    url: 'https://misaludcardio.cl'
  }
];

export const CAPSULAS = [
  {
    slug: 'insulina',
    titulo: 'Insulina',
    descripcion: 'Qué es la insulina, tipos, uso, sitios y señales de alerta.',
    tipo: 'video',
    duracion: '1:10 min',
    imagen: '/imagenes/publicas/insulina-aplicacion.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/c%C3%A1psula-insulina-v1.mp4',
    items: [],
    puntos: [],
    pasos: []
  },
  {
    slug: 'presion-arterial',
    titulo: 'Presión arterial',
    descripcion: 'Cómo tomarte la presión en casa: postura, brazo y registro.',
    tipo: 'video',
    duracion: '0:38 min',
    imagen: '/imagenes/publicas/presion-postura.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-presion-arterial-v1.mp4',
    items: [],
    puntos: [],
    pasos: []
  },
  {
    slug: 'senales-de-alerta',
    titulo: 'Señales de alerta',
    descripcion: 'Cuándo pedir ayuda urgente.',
    tipo: 'video',
    duracion: '1:15 min',
    imagen: '/imagenes/publicas/parametros-pa.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4',
    items: [],
    puntos: [],
    pasos: []
  }
];

export const CAPSULAS_EDUCATIVAS = CAPSULAS;

export default CAPSULAS;
