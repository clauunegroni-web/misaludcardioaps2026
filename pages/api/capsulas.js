import { list, put } from '@vercel/blob'
import { CAPSULAS } from '../../lib/capsulas'

const pathname = 'mi-salud-cardio/capsulas.json'
const token = process.env.VIDEOS_BLOB_READ_WRITE_TOKEN

function authorized(req) {
  const password = process.env.ADMIN_PASSWORD
  const header = req.headers.authorization || ''
  return password && header === `Bearer ${password}`
}

function validCapsulas(value) {
  if (!Array.isArray(value) || value.length === 0) return false
  const slugs = new Set()
  return value.every((capsula) => {
    const valid =
      typeof capsula.slug === 'string' && /^[a-z0-9-]+$/.test(capsula.slug) &&
      typeof capsula.titulo === 'string' && capsula.titulo.trim().length > 0 &&
      typeof capsula.resumen === 'string' &&
      typeof capsula.video === 'string' && /^https:\/\//.test(capsula.video)
    if (slugs.has(capsula.slug)) return false
    slugs.add(capsula.slug)
    return valid
  })
}

export default async function handler(req, res) {
  if (!token) return res.status(500).json({ error: 'Falta configurar el almacenamiento de cápsulas.' })

  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: pathname, token })
      if (!blobs.length) return res.status(200).json({ capsulas: CAPSULAS })
      const response = await fetch(blobs[0].url, { cache: 'no-store' })
      if (!response.ok) throw new Error('No se pudo leer el contenido guardado.')
      return res.status(200).json({ capsulas: await response.json() })
    } catch (error) {
      return res.status(500).json({ error: 'No se pudieron cargar las cápsulas.' })
    }
  }

  if (req.method !== 'PUT') return res.status(405).json({ error: 'Método no permitido.' })
  if (!authorized(req)) return res.status(401).json({ error: 'Contraseña incorrecta.' })
  if (!validCapsulas(req.body?.capsulas)) return res.status(400).json({ error: 'Revisa título, resumen, enlace de video y nombre corto de cada cápsula.' })

  try {
    await put(pathname, JSON.stringify(req.body.capsulas), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json; charset=utf-8',
      token,
    })
    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({ error: 'No se pudieron guardar los cambios.' })
  }
}
