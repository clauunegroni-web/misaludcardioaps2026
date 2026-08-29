import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CAPSULAS } from '../../lib/capsulas'

export default function CapsulasIndex() {
  const [capsulas, setCapsulas] = useState(CAPSULAS)

  useEffect(() => {
    fetch('/api/capsulas')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => data?.capsulas?.length && setCapsulas(data.capsulas))
      .catch(() => {})
  }, [])

  return <><Head><title>Cápsulas educativas · Mi Salud Cardio</title></Head><main><header className="capsulas-hero"><div className="container"><Link href="/" className="back-link">← Volver al inicio</Link><p className="eyebrow">Aprende a tu ritmo</p><h1>Cápsulas educativas</h1><p className="lead">Videos cortos, con voz y texto claro, para cuidar tu corazón paso a paso.</p></div></header><section className="container section"><ul className="capsule-grid" role="list">{capsulas.map((capsula) => <li key={capsula.slug} className="capsule-card"><Link href={`/capsulas/${capsula.slug}`} className="capsule-link" aria-label={`${capsula.titulo}. ${capsula.resumen}`}><div className="poster" style={{ backgroundImage: `url(${capsula.imagen})` }}><span className={`tag tag-${capsula.color || 'azul'}`}>{capsula.tema || 'Cápsula educativa'}</span><span className="duration">▶ {capsula.duracionTexto}</span></div><div className="capsule-body"><h2>{capsula.titulo}</h2><p>{capsula.resumen}</p><span className="cta">Ver cápsula →</span></div></Link></li>)}</ul></section></main></>
}
