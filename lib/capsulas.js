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
    resumen: 'Qué es la insulina, sus tipos, cómo usarla, dónde aplicarla y cuándo pedir ayuda.',
    tema: 'Diabetes',
    color: 'azul',
    duracionTexto: '1:10 min',
    imagen: '/imagenes/insulina-aplicacion.jpg',
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/c%C3%A1psula-insulina-v1.mp4',
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
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-presion-arterial-v1.mp4',
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
    video: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4',
    audioTexto: 'Reconoce cuándo pedir ayuda urgente por señales cardiovasculares.',
    aviso: 'Ante dolor intenso en el pecho, falta de aire o desmayo, busca atención de urgencia.',
    pasos: []
  }
];

export const CAPSULAS_EDUCATIVAS = CAPSULAS;

export default CAPSULAS;
