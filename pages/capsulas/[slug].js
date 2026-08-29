import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { CAPSULAS } from '../../lib/capsulas'

export default function CapsulaPage() {
  const router = useRouter(); const videoRef = useRef(null); const [capsulas, setCapsulas] = useState(CAPSULAS); const [hablando, setHablando] = useState(false)
  useEffect(() => { fetch('/api/capsulas').then((r) => r.ok ? r.json() : null).then((data) => data?.capsulas && setCapsulas(data.capsulas)).catch(() => {}) }, [])
  const capsula = capsulas.find((c) => c.slug === router.query.slug)
  if (!capsula) return <main className="container section"><p>Cápsula no encontrada.</p><Link href="/capsulas">Volver a las cápsulas</Link></main>
  const escuchar = () => { if (!window.speechSynthesis) return; const utter = new SpeechSynthesisUtterance(capsula.audioTexto || capsula.resumen); utter.lang = 'es-CL'; utter.onstart = () => setHablando(true); utter.onend = () => setHablando(false); window.speechSynthesis.cancel(); videoRef.current?.pause(); window.speechSynthesis.speak(utter) }
  const detener = () => { window.speechSynthesis?.cancel(); setHablando(false) }
  return <><Head><title>{capsula.titulo} · Mi Salud Cardio</title><meta name="description" content={capsula.resumen} /></Head><main><header className={`capsule-hero hero-${capsula.color}`}><div className="container"><Link href="/capsulas" className="back-link">← Volver a las cápsulas</Link><p className="eyebrow">{capsula.tema}</p><h1>{capsula.titulo}</h1><p className="lead">{capsula.resumen}</p><button type="button" onClick={hablando ? detener : escuchar} className="btn btn-secondary btn-xl">{hablando ? 'Detener audio' : 'Escuchar'}</button></div></header><section className="container section"><div className="capsule-player"><video ref={videoRef} controls playsInline preload="metadata" poster={capsula.imagen} onPlay={detener}><source src={capsula.video} type="video/mp4" />Tu navegador no puede reproducir este video.</video><p className="video-help">Duración {capsula.duracionTexto}.</p></div>{capsula.pasos?.length > 0 && <article className="pasos-card"><h2>Pasos importantes</h2><ol className="pasos-lista">{capsula.pasos.map((p, i) => <li key={i}>{p}</li>)}</ol></article>}<aside className="aviso-card" role="note"><strong>Importante:</strong> {capsula.aviso}</aside></section></main></>
}
