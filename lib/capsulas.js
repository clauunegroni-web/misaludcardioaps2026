export const ACCESOS = [
  {
    slug: 'aprender-de-mis-remedios',
    titulo: 'Aprender de mis remedios',
    descripcion: 'Fotos e información sobre medicamentos.',
    icono: '💊',
    imagen: '/imagenes/publicas/aprender-remedios.jpg'
  },
  {
    slug: 'capsulas-educativas',
    titulo: 'Cápsulas educativas',
    descripcion: 'Videos cortos con voz, subtítulos y pictogramas.',
    icono: '🎬',
    imagen: '/imagenes/publicas/capsulas-educativas.jpg'
  },
  {
    slug: 'mis-remedios-del-dia',
    titulo: 'Mis remedios del día',
    descripcion: 'Agrega, dosis y comparte la lista.',
    icono: '⏰',
    imagen: '/imagenes/publicas/remedios-dia.jpg'
  },
  {
    slug: 'imagenes',
    titulo: 'Imágenes',
    descripcion: 'Galería de las imágenes para tu salud.',
    icono: '🖼️',
    imagen: '/imagenes/publicas/imagenes-salud.jpg'
  },
  {
    slug: 'se-me-olvido',
    titulo: '¿Se me olvidó?',
    descripcion: 'Respuestas a preguntas frecuentes.',
    icono: '❓',
    imagen: '/imagenes/publicas/se-me-olvido.jpg'
  },
  {
    slug: 'hablar-con-farmaceutico',
    titulo: 'Hablar con el Farmacéutico',
    descripcion: 'Preguntas dudas por WhatsApp.',
    icono: '💬',
    imagen: '/imagenes/publicas/whatsapp-farmaceutico.jpg'
  },
  {
    slug: 'cuidador-farmaceutico',
    titulo: 'Cuidador / Farmacéutico',
    descripcion: 'Espacio para quien te acompaña.',
    icono: '🤝',
    imagen: '/imagenes/publicas/cuidador.jpg'
  },
  {
    slug: 'pagina-web',
    titulo: 'Página web',
    descripcion: 'Abre la app en el navegador.',
    icono: '🌐',
    imagen: '/imagenes/publicas/pagina-web.jpg'
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
