import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CAPSULAS } from '../../lib/capsulas'

export default function CapsulasIndex() {
  const [capsulas, setCapsulas] = useState(CAPSULAS)
  useEffect(() => { fetch('/api/capsulas').then((r) => r.ok ? r.json() : null).then((data) => data?.capsulas && setCapsulas(data.capsulas)).catch(() => {}) }, [])
  return <><Head><title>Cápsulas educativas · Mi Salud Cardio</title></Head><main><header className="capsulas-hero"><div className="container"><Link href="/" className="back-link">← Volver al inicio</Link><p className="eyebrow">Aprende a tu ritmo</p><h1>Cápsulas educativas</h1><p className="lead">Videos e imágenes cortas con voz, texto grande y pasos claros para el cuidado diario de tu corazón.</p></div></header><section className="container section"><ul className="capsule-grid" role="list">{capsulas.map((c) => <li key={c.slug} className="capsule-card"><Link href={`/capsulas/${c.slug}`} className="capsule-link" aria-label={`${c.titulo}. ${c.resumen}`}><div className="poster" style={{ backgroundImage: `url(${c.imagen})` }}><span className={`tag tag-${c.color}`} aria-hidden="true">{c.tema}</span><span className="duration" aria-hidden="true">▶ {c.duracionTexto}</span></div><div className="capsule-body"><h3>{c.titulo}</h3><p>{c.resumen}</p><span className="cta">Abrir cápsula →</span></div></Link></li>)}</ul></section></main></>
}
