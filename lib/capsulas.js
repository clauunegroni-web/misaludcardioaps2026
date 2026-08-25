// Fuente única de verdad para las cápsulas educativas.
// 4 cápsulas: 1 con video + 3 con imagen ilustrada + texto grande + audio.

export const CAPSULAS = [
  {
    slug: 'presion',
    tema: 'Presión arterial',
    color: 'verde',
    tipo: 'video',
    titulo: 'Cómo tomarte la presión en casa',
    resumen:
      'Postura correcta, brazo adecuado y cómo registrar tus valores para conversarlos con tu equipo de salud.',
    duracionTexto: '0:38',
    imagen: '/imagenes/presion-postura.jpg',
    infografia: '/imagenes/presion-postura-infografia.jpg',
    infografiaAlt:
      'Infografía: Toma tu presión en casa de forma correcta. Preparación previa, postura correcta y uso del brazalete.',
    video:
      'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4',
    pasos: [
      'Descansa 5 minutos sentado, con la espalda apoyada.',
      'Pon el brazo sobre la mesa, a la altura del corazón.',
      'Coloca el manguito sin ropa apretada.',
      'Quédate en silencio y no cruces las piernas.',
      'Anota el valor, el brazo y la hora.',
    ],
    audioTexto:
      'Antes de tomarte la presión, descansa cinco minutos sentado, con la espalda apoyada. Pon tu brazo sobre la mesa, a la altura de tu corazón. Coloca el manguito directamente sobre la piel, sin ropa apretada. Quédate en silencio y no cruces las piernas. Después de medir, anota el valor, en qué brazo lo mediste y la hora. Lleva estos datos a tu control con el equipo de salud.',
    aviso:
      'Este material es educativo y no reemplaza la evaluación de tu equipo de salud.',
  },
  {
    slug: 'parametros-pa',
    tema: 'Emergencia cardíaca',
    color: 'rojo',
    tipo: 'imagen',
    titulo: 'Valores de presión: cuándo pedir ayuda',
    resumen:
      'Cómo reconocer si tu presión está baja, normal o alta, y qué hacer en una emergencia cardíaca.',
    imagen: '/imagenes/parametros-pa.jpg',
    infografia: '/imagenes/valores-presion-infografia.jpg',
    infografiaAlt:
      'Infografía: Valores de la presión arterial. Clasificación en normal, elevada, hipertensión grado 1, grado 2 y crisis hipertensiva.',
    pasos: [
      'BAJA (menos de 90/60): puedes sentir mareo. Recuéstate y avisa.',
      'NORMAL (alrededor de 120/80): sigue tu tratamiento y tus controles.',
      'ALTA (140/90 o más): descansa, mide de nuevo en 15 minutos y consulta.',
      'MUY ALTA con dolor de pecho, mareo intenso o falta de aire: llama al SAMU 131 ahora.',
    ],
    audioTexto:
      'Estos son los valores importantes de la presión arterial. Presión baja: menos de noventa sesenta. Puedes sentir mareo, recuéstate y pide ayuda. Presión normal: alrededor de ciento veinte con ochenta. Sigue tu tratamiento. Presión alta: ciento cuarenta con noventa o más. Descansa, mide otra vez en quince minutos y consulta con tu equipo de salud. Si además tienes dolor de pecho, falta de aire o mareo intenso, es una emergencia cardíaca. Llama al SAMU al uno tres uno de inmediato.',
    aviso:
      'Ante dolor de pecho, falta de aire o presión muy alta, llama al SAMU 131.',
  },
  {
    slug: 'emergencia-diabetica',
    tema: 'Emergencia diabética',
    color: 'naranja',
    tipo: 'imagen',
    titulo: 'Hipoglicemia e hiperglicemia',
    resumen:
      'Cómo reconocer una bajada o subida peligrosa de azúcar y qué hacer en cada caso.',
    imagen: '/imagenes/emergencia-diabetica.jpg',
    infografia: '/imagenes/emergencia-diabetica-infografia.jpg',
    infografiaAlt:
      'Infografía: Guía rápida de diabetes. Hipoglicemia (bajo azúcar), hiperglicemia (alto azúcar) y emergencia.',
    infografiaNota:
      'En Chile, en caso de emergencia llama al SAMU 131 (el número 112 de la infografía es europeo).',
    pasos: [
      'HIPOGLICEMIA (azúcar baja): sudor frío, temblor, hambre, mareo.',
      'Qué hacer: come o toma algo dulce ahora (un jugo, una cucharada de azúcar).',
      'HIPERGLICEMIA (azúcar alta): mucha sed, ganas de orinar, cansancio.',
      'Qué hacer: bebe agua, mide tu glicemia y contacta a tu equipo de salud.',
      'Si hay confusión o desmayo, llama al SAMU 131 sin demora.',
    ],
    audioTexto:
      'Cuando tienes diabetes, hay dos emergencias que debes reconocer. La primera es hipoglicemia, el azúcar está muy baja. Puedes sentir sudor frío, temblor, hambre repentina y mareo. Qué hacer: come o toma algo dulce ahora, un jugo o una cucharada de azúcar. La segunda es hiperglicemia, el azúcar está muy alta. Sientes mucha sed, ganas de orinar seguido y cansancio. Qué hacer: bebe agua, mide tu glicemia y contacta a tu equipo de salud. Si hay confusión o desmayo, llama al SAMU al uno tres uno sin demora.',
    aviso:
      'Si hay confusión, desmayo o vómitos, llama al SAMU 131 de inmediato.',
  },
  {
    slug: 'insulina',
    tema: 'Diabetes y autocuidado',
    color: 'azul',
    tipo: 'imagen',
    titulo: 'Uso seguro de insulina',
    resumen:
      'Cómo aplicarte la insulina paso a paso, dónde inyectar y qué hacer si te sientes mal.',
    imagen: '/imagenes/insulina-aplicacion.jpg',
    pasos: [
      'Lávate las manos con agua y jabón.',
      'Elige el sitio: abdomen, muslo o brazo.',
      'Cambia el sitio cada vez, rotando de un lado a otro.',
      'Inyecta lentamente y cuenta hasta diez antes de retirar.',
      'Si sudas frío o tiemblas, come algo dulce y avisa.',
    ],
    audioTexto:
      'Antes de aplicarte insulina, lávate las manos con agua y jabón. Elige el sitio de inyección: puede ser el abdomen, el muslo o el brazo. Cambia el sitio cada vez que te inyectes, rotando de un lado a otro para cuidar tu piel. Inyecta lentamente y cuenta hasta diez antes de retirar la aguja. Si después te sientes con sudor frío, temblor o mareo, come algo dulce y avisa a alguien. Nunca ajustes tu dosis sin indicación de tu equipo de salud.',
    aviso:
      'No ajustes ni suspendas tu insulina sin indicación de un profesional.',
  },
]

// Los 8 accesos de la portada. 'Cápsulas educativas' es el único con contenido real hoy.
export const ACCESOS = [
  {
    slug: 'aprender',
    titulo: 'Aprender de mis remedios',
    descripcion: 'Leer y escuchar.',
    color: 'azul',
    activo: false,
  },
  {
    slug: 'capsulas',
    titulo: 'Cápsulas educativas',
    descripcion: 'Ver o escuchar.',
    color: 'morado',
    activo: true,
  },
  {
    slug: 'remedios-dia',
    titulo: 'Mis remedios del día',
    descripcion: 'Marcar tomas.',
    color: 'verde',
    activo: false,
  },
  {
    slug: 'imagenes',
    titulo: 'Imágenes',
    descripcion: 'Pictogramas farmacéuticos.',
    color: 'amarillo',
    activo: false,
  },
  {
    slug: 'cuidador',
    titulo: 'Para mi cuidador o farmacéutico',
    descripcion: 'Mostrar resumen.',
    color: 'rosa',
    activo: false,
  },
  {
    slug: 'acuerdo',
    titulo: '¿Me acuerdo?',
    descripcion: 'Responder con dibujos.',
    color: 'durazno',
    activo: false,
  },
  {
    slug: 'farmaceutico',
    titulo: 'Hablar con farmacéutico',
    descripcion: 'Preguntar dudas.',
    color: 'verde-claro',
    activo: false,
  },
  {
    slug: 'pagina-web',
    titulo: 'Página web',
    descripcion: 'Abrir la app.',
    color: 'celeste',
    activo: false,
  },
]
