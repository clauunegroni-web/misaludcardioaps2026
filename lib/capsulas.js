avaScript
export const CAPSULAS = [
  {
    slug: 'insulina',
    titulo: 'Insulina',
    descripcion: 'Qué es la insulina, tipos, uso, sitios y señales de alerta.',
    tipo: 'video',
    duracion: '1:10 min',
    imagen: '/imagenes/publicas/insulina-aplicacion.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/c%C3%A1psula-insulina-v1.mp4.mp4'
  },
  {
    slug: 'presion-arterial',
    titulo: 'Presión arterial',
    descripcion: 'Cómo tomarte la presión en casa: postura, brazo y registro.',
    tipo: 'video',
    duracion: '0:38 min',
    imagen: '/imagenes/publicas/presion-postura.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-Presion%20arterial-hdl-ldl-v1.mp4.mp4'
  },
  {
    slug: 'senales-de-alerta',
    titulo: 'Señales de alerta',
    descripcion: 'Cuándo pedir ayuda urgente.',
    tipo: 'video',
    duracion: '1:15 min',
    imagen: '/imagenes/publicas/parametros-pa.jpg',
    videoUrl: 'https://kv196ctez5usceel.public.blob.vercel-storage.com/capsula-se%C3%B1ales-alarma-cardiovascular-v1.mp4.mp4'
  }
];

Bash
git add .
git commit -m "Actualiza capsulas.js con videos correctos"
git push origin main
