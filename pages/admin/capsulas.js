import { useEffect, useState } from 'react'
import { CAPSULAS } from '../../lib/capsulas'

const fields = [
  ['slug', 'Nombre corto (ejemplo: presion-arterial)'], ['titulo', 'Título'], ['tema', 'Tema'],
  ['resumen', 'Descripción'], ['duracionTexto', 'Duración'], ['imagen', 'Enlace o ruta de imagen'],
  ['video', 'Enlace del video'], ['audioTexto', 'Texto para escuchar'], ['aviso', 'Aviso importante'],
]

export default function AdminCapsulas() {
  const [password, setPassword] = useState(''); const [capsulas, setCapsulas] = useState(CAPSULAS); const [status, setStatus] = useState('')
  useEffect(() => { fetch('/api/capsulas').then((r) => r.ok ? r.json() : null).then((data) => data?.capsulas && setCapsulas(data.capsulas)).catch(() => setStatus('No se pudieron cargar las cápsulas.')) }, [])
  const update = (index, key, value) => setCapsulas((current) => current.map((item, i) => i === index ? { ...item, [key]: value } : item))
  const remove = (index) => setCapsulas((current) => current.filter((_, i) => i !== index))
  const add = () => setCapsulas((current) => [...current, { slug: `capsula-${current.length + 1}`, titulo: 'Nueva cápsula', tema: 'Salud', resumen: '', duracionTexto: '', imagen: '', video: 'https://', audioTexto: '', aviso: 'Consulta a tu equipo de salud.', color: 'azul', pasos: [] }])
  const save = async (event) => { event.preventDefault(); setStatus('Guardando…'); const response = await fetch('/api/capsulas', { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${password}` }, body: JSON.stringify({ capsulas }) }); const data = await response.json(); setStatus(response.ok ? 'Cambios guardados. Ya se ven en las cápsulas educativas.' : data.error || 'No se pudieron guardar los cambios.') }
  return <main className="container section"><h1>Administrar cápsulas</h1><p>Ingresa tu contraseña y edita el contenido. Los cambios se publican al guardar.</p><form onSubmit={save}><label>Contraseña de administración<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>{capsulas.map((capsula, index) => <fieldset key={`${capsula.slug}-${index}`} style={{ margin: '24px 0', padding: 16 }}><legend>Cápsula {index + 1}</legend>{fields.map(([key, label]) => <label key={key} style={{ display: 'block', margin: '12px 0' }}>{label}{key === 'resumen' || key === 'audioTexto' || key === 'aviso' ? <textarea value={capsula[key] || ''} onChange={(e) => update(index, key, e.target.value)} rows="3" required={['resumen'].includes(key)} /> : <input value={capsula[key] || ''} onChange={(e) => update(index, key, e.target.value)} required={['slug', 'titulo', 'video'].includes(key)} />}</label>)}<button type="button" onClick={() => remove(index)}>Eliminar esta cápsula</button></fieldset>)}<button type="button" onClick={add}>Agregar cápsula</button>{' '}<button type="submit" className="btn btn-primary">Guardar cambios</button></form>{status && <p role="status"><strong>{status}</strong></p>}</main>
}
