export const ACCESOS = [
  {
    id: 'aprender-de-mis-remedios',
    slug: 'aprender-de-mis-remedios',
    titulo: 'Aprender de mis remedios',
    descripcion: 'Folletos por grupo de medicamentos.',
    ilustracion: '/imagenes/aprender-remedios.png',
    icono: '/imagenes/aprender-remedios.png',
    imagen: '/imagenes/aprender-remedios.png',
    href: '/aprender',
    url: '/aprender'
  },
  {
    id: 'capsulas-educativas',
    slug: 'capsulas-educativas',
    titulo: 'Cápsulas educativas',
    descripcion: 'Videos breves con voz y pictogramas.',
    ilustracion: '/imagenes/capsulas-educativas.png',
    icono: '/imagenes/capsulas-educativas.png',
    imagen: '/imagenes/capsulas-educativas.png',
    href: '/capsulas',
    url: '/capsulas'
  },
  {
    id: 'mis-remedios-del-dia',
    slug: 'mis-remedios-del-dia',
    titulo: 'Mis remedios del día',
    descripcion: 'Agrega, revisa y comparte tus dosis.',
    ilustracion: '/imagenes/remedios-dia.png',
    icono: '/imagenes/remedios-dia.png',
    imagen: '/imagenes/remedios-dia.png',
    href: '/mis-remedios',
    url: '/mis-remedios'
  },
  {
    id: 'imagenes',
    slug: 'imagenes',
    titulo: 'Imágenes',
    descripcion: 'Galería de pictogramas por rutinas.',
    ilustracion: '/imagenes/imagenes-salud.png',
    icono: '/imagenes/imagenes-salud.png',
    imagen: '/imagenes/imagenes-salud.png',
    href: '/imagenes',
    url: '/imagenes'
  },
  {
    id: 'se-me-olvido',
    slug: 'se-me-olvido',
    titulo: '¿Me acuerdo?',
    descripcion: 'Preguntas rápidas para practicar.',
    ilustracion: '/imagenes/se-me-olvido.png',
    icono: '/imagenes/se-me-olvido.png',
    imagen: '/imagenes/se-me-olvido.png',
    href: '/preguntas',
    url: '/preguntas'
  },
  {
    id: 'hablar-con-farmaceutico',
    slug: 'hablar-con-farmaceutico',
    titulo: 'Habla con el Farmacéutico',
    descripcion: 'Preguntar dudas por WhatsApp.',
    ilustracion: '/imagenes/whatsapp-farmaceutico.png',
    icono: '/imagenes/whatsapp-farmaceutico.png',
    imagen: '/imagenes/whatsapp-farmaceutico.png',
    href: '/whatsapp',
    url: '/whatsapp'
  },
  {
    id: 'cuidador-farmaceutico',
    slug: 'cuidador-farmaceutico',
    titulo: 'Cuidador / Farmacéutico',
    descripcion: 'Apoyo para quien acompaña.',
    ilustracion: '/imagenes/cuidador.png',
    icono: '/imagenes/cuidador.png',
    imagen: '/imagenes/cuidador.png',
    href: '/cuidador',
    url: '/cuidador'
  },
  {
    id: 'pagina-web',
    slug: 'pagina-web',
    titulo: 'Página web',
    descripcion: 'Abrir la app en el navegador.',
    ilustracion: '/imagenes/pagina-web.png',
    icono: '/imagenes/pagina-web.png',
    imagen: '/imagenes/pagina-web.png',
    href: 'https://misaludcardio.cl',
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
    imagen: '/imagenes/insulina-aplicacion.jpg',
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
    imagen: '/imagenes/presion-postura.jpg',
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
    imagen: '/imagenes/parametros-pa.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4',
    items: [],
    puntos: [],
    pasos: []
  }
];

export const CAPSULAS_EDUCATIVAS = CAPSULAS;

export default CAPSULAS;
