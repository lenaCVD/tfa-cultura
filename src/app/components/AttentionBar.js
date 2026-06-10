'use client'

import { useEffect, useState } from 'react'

export default function AttentionBar() {
  const [seconds, setSeconds] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [scrolled, setScrolled] = useState(0)
  const [attentionWarnings, setAttentionWarnings] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setScrolled(scrollPercent)
      if (scrollPercent > 0.7) setRevealed(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Advertencias pasivo-agresivas
  useEffect(() => {
    if (seconds === 45 && attentionWarnings === 0) {
      setAttentionWarnings(1)
      setTimeout(() => alert('⚠️ Llevas 45 segundos. ¿Seguro que esto es relevante para ti?'), 100)
    }
    if (seconds === 120 && attentionWarnings === 1) {
      setAttentionWarnings(2)
      setTimeout(() => alert('⏰ 2 minutos. Tu atención vale dinero, ¿lo sabías?'), 100)
    }
    if (seconds === 300 && attentionWarnings === 2) {
      setAttentionWarnings(3)
      setTimeout(() => alert('💀 5 minutos. Ya es tarde para cerrar la pestaña.'), 100)
    }
  }, [seconds, attentionWarnings])

  const progress = Math.min((seconds / 180) * 100, 100)

  return (
    <>
      {/* Barra de progreso temporal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${progress}%`,
        background: `linear-gradient(90deg, var(--red), var(--green), #ff00ff)`,
        zIndex: 10000,
        transition: 'width 1s linear',
        pointerEvents: 'none',
        boxShadow: '0 0 10px var(--red)',
      }} />

      {/* Barra de lectura */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '3px',
        width: `${scrolled * 100}%`,
        background: 'var(--green)',
        zIndex: 10000,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none',
        boxShadow: '0 0 5px var(--green)',
      }} />

      {/* Contador flotante (siempre visible después de 10s) */}
      {seconds > 10 && (
        <div style={{
          position: 'fixed',
          top: '3rem',
          left: '1rem',
          background: 'rgba(0,0,0,0.9)',
          border: `2px solid ${seconds > 180 ? 'var(--red)' : 'var(--mid)'}`,
          padding: '0.5rem 0.75rem',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          color: seconds > 180 ? 'var(--red)' : '#aaa',
          zIndex: 9999,
          animation: seconds > 180 ? 'pulse 0.5s infinite' : 'none',
          letterSpacing: '0.1em',
        }}>
          ⏱️ {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
          {seconds > 180 && ' ⚠️'}
        </div>
      )}

      {/* Mensaje de atención */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: revealed ? 'var(--red)' : 'rgba(0,0,0,0.9)',
        backdropFilter: revealed ? 'none' : 'blur(8px)',
        color: revealed ? '#000' : 'rgba(255,255,255,0.3)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        padding: revealed ? '1rem 1.5rem' : '0.75rem 1rem',
        maxWidth: '280px',
        zIndex: 9999,
        lineHeight: 1.5,
        border: `1px solid ${revealed ? 'transparent' : 'var(--red)'}`,
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        opacity: revealed ? 1 : 0.6,
        textAlign: 'left',
      }}
      onClick={() => !revealed && setRevealed(true)}>
        {revealed ? (
          <>
            <strong>📊 METADADOS DE ATENCIÓN</strong><br />
            ⏱️ {seconds} segundos<br />
            📄 {Math.floor(scrolled * 100)}% leído<br />
            💰 Valor estimado de tu atención: €{(seconds * 0.001).toFixed(3)}<br />
            <span style={{ fontSize: '0.6rem', opacity: 0.7, display: 'block', marginTop: '0.5rem' }}>
              [La atención es la materia prima de la economía digital]
            </span>
          </>
        ) : (
          '🔒 [DATOS BLOQUEADOS] Continúa scrolleando para liberar tu atención'
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </>
  )
}