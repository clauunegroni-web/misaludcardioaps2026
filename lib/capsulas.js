export const ACCESOS = [
  {
    id: 'aprender-de-mis-remedios',
    slug: 'aprender-de-mis-remedios',
    titulo: 'Aprender de mis remedios',
    descripcion: 'Folletos por grupo de medicamentos.',
    ilustracion: '/imagenes/publicas/aprender-remedios.png',
    icono: '/imagenes/publicas/aprender-remedios.png',
    imagen: '/imagenes/publicas/aprender-remedios.png',
    href: '/aprender'
  },
  {
    id: 'capsulas-educativas',
    slug: 'capsulas-educativas',
    titulo: 'Cápsulas educativas',
    descripcion: 'Videos breves con voz y pictogramas.',
    ilustracion: '/imagenes/publicas/capsulas-educativas.png',
    icono: '/imagenes/publicas/capsulas-educativas.png',
    imagen: '/imagenes/publicas/capsulas-educativas.png',
    href: '/capsulas'
  },
  {
    id: 'mis-remedios-del-dia',
    slug: 'mis-remedios-del-dia',
    titulo: 'Mis remedios del día',
    descripcion: 'Agrega, revisa y comparte tus dosis.',
    ilustracion: '/imagenes/publicas/remedios-dia.png',
    icono: '/imagenes/publicas/remedios-dia.png',
    imagen: '/imagenes/publicas/remedios-dia.png',
    href: '/mis-remedios'
  },
  {
    id: 'imagenes',
    slug: 'imagenes',
    titulo: 'Imágenes',
    descripcion: 'Galería de pictogramas por rutinas.',
    ilustracion: '/imagenes/publicas/imagenes-salud.png',
    icono: '/imagenes/publicas/imagenes-salud.png',
    imagen: '/imagenes/publicas/imagenes-salud.png',
    href: '/imagenes'
  },
  {
    id: 'se-me-olvido',
    slug: 'se-me-olvido',
    titulo: '¿Me acuerdo?',
    descripcion: 'Preguntas rápidas para practicar.',
    ilustracion: '/imagenes/publicas/se-me-olvido.png',
    icono: '/imagenes/publicas/se-me-olvido.png',
    imagen: '/imagenes/publicas/se-me-olvido.png',
    href: '/preguntas'
  },
  {
    id: 'hablar-con-farmaceutico',
    slug: 'hablar-con-farmaceutico',
    titulo: 'Habla con el Farmacéutico',
    descripcion: 'Preguntar dudas por WhatsApp.',
    ilustracion: '/imagenes/publicas/whatsapp-farmaceutico.png',
    icono: '/imagenes/publicas/whatsapp-farmaceutico.png',
    imagen: '/imagenes/publicas/whatsapp-farmaceutico.png',
    href: '/whatsapp'
  },
  {
    id: 'cuidador-farmaceutico',
    slug: 'cuidador-farmaceutico',
    titulo: 'Cuidador / Farmacéutico',
    descripcion: 'Apoyo para quien acompaña.',
    ilustracion: '/imagenes/publicas/cuidador.png',
    icono: '/imagenes/publicas/cuidador.png',
    imagen: '/imagenes/publicas/cuidador.png',
    href: '/cuidador'
  },
  {
    id: 'pagina-web',
    slug: 'pagina-web',
    titulo: 'Página web',
    descripcion: 'Abrir la app en el navegador.',
    ilustracion: '/imagenes/publicas/pagina-web.png',
    icono: '/imagenes/publicas/pagina-web.png',
    imagen: '/imagenes/publicas/pagina-web.png',
    href: 'https://misaludcardio.cl'
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
