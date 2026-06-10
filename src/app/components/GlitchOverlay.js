'use client'

import { useEffect, useState } from 'react'

export default function GlitchOverlay() {
  const [active, setActive] = useState(false)
  const [intensity, setIntensity] = useState('medium') // light, medium, intense
  const [glitchData, setGlitchData] = useState({
    top: '0%',
    height: '4px',
    opacity: 0.2,
    skew: false,
    type: 'bar'
  })

  useEffect(() => {
    // Intensidad basada en el tiempo de lectura (más molesto después)
    const intensityTimer = setTimeout(() => {
      setIntensity('intense')
    }, 60000) // Después de 1 minuto se vuelve más molesto

    const triggerGlitch = () => {
      const random = Math.random()
      
      // Tipos de glitch más agresivos cuando intensity es 'intense'
      const glitchTypes = intensity === 'intense' 
        ? ['bar', 'double', 'rgb', 'shake', 'blink']
        : ['bar', 'double']
      
      const type = glitchTypes[Math.floor(Math.random() * glitchTypes.length)]
      
      setActive(true)
      
      switch(type) {
        case 'bar':
          setGlitchData({
            top: `${Math.random() * 100}%`,
            height: `${3 + Math.random() * (intensity === 'intense' ? 40 : 15)}px`,
            opacity: 0.15 + Math.random() * (intensity === 'intense' ? 0.5 : 0.25),
            skew: Math.random() > 0.5,
            type: 'bar'
          })
          break
        case 'double':
          setGlitchData({
            top: `${Math.random() * 90}%`,
            height: `${8 + Math.random() * 30}px`,
            opacity: 0.3 + Math.random() * 0.4,
            skew: true,
            type: 'double'
          })
          break
        case 'rgb':
          setGlitchData({
            top: `${Math.random() * 100}%`,
            height: `${10 + Math.random() * 50}px`,
            opacity: 0.4,
            skew: Math.random() > 0.3,
            type: 'rgb'
          })
          break
        case 'shake':
          setGlitchData({
            top: '0%',
            height: '100%',
            opacity: 0.1,
            skew: true,
            type: 'shake'
          })
          break
        case 'blink':
          setGlitchData({
            top: '0%',
            height: '100%',
            opacity: 0.95,
            skew: false,
            type: 'blink'
          })
          break
      }
      
      const duration = intensity === 'intense' 
        ? 50 + Math.random() * 200
        : 80 + Math.random() * 120
      
      setTimeout(() => setActive(false), duration)
    }

    // Frecuencia aumentada con la intensidad
    const frequency = intensity === 'intense' ? 800 : 1800
    const probability = intensity === 'intense' ? 0.8 : 0.6
    
    const loop = setInterval(() => {
      if (Math.random() > probability) triggerGlitch()
    }, frequency)

    return () => {
      clearInterval(loop)
      clearTimeout(intensityTimer)
    }
  }, [intensity])

  if (!active) return null

  if (glitchData.type === 'rgb') {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9998,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}>
        <div style={{
          position: 'absolute',
          top: glitchData.top,
          left: 0,
          right: 0,
          height: glitchData.height,
          background: '#ff0000',
          opacity: glitchData.opacity,
          transform: glitchData.skew ? 'skewX(5deg)' : 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: `calc(${glitchData.top} + 2px)`,
          left: 2,
          right: 0,
          height: glitchData.height,
          background: '#00ff00',
          opacity: glitchData.opacity,
          transform: glitchData.skew ? 'skewX(-5deg)' : 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: `calc(${glitchData.top} + 4px)`,
          left: -2,
          right: 0,
          height: glitchData.height,
          background: '#0000ff',
          opacity: glitchData.opacity,
          transform: glitchData.skew ? 'skewX(3deg)' : 'none',
        }} />
      </div>
    )
  }

  if (glitchData.type === 'shake') {
    return (
      <style jsx global>{`
        body {
          animation: violentShake 0.05s infinite !important;
        }
        @keyframes violentShake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-4px, 2px); }
          50% { transform: translate(4px, -2px); }
          75% { transform: translate(-2px, 4px); }
          100% { transform: translate(2px, -4px); }
        }
      `}</style>
    )
  }

  if (glitchData.type === 'blink') {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000',
        zIndex: 9999,
        pointerEvents: 'none',
        animation: 'blink 0.03s 3',
      }}>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    )
  }

  // Default bar glitch
  return (
    <>
      <div style={{
        position: 'fixed',
        top: glitchData.top,
        left: 0,
        right: 0,
        height: glitchData.height,
        background: glitchData.type === 'double' ? 'var(--red)' : '#fff',
        mixBlendMode: glitchData.type === 'double' ? 'difference' : 'overlay',
        zIndex: 9998,
        pointerEvents: 'none',
        transform: glitchData.skew ? 'skewY(-0.5deg) translateX(4px)' : 'none',
        opacity: glitchData.opacity,
      }} />
      {glitchData.type === 'double' && (
        <div style={{
          position: 'fixed',
          top: `calc(${glitchData.top} + ${glitchData.height}px)`,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--green)',
          mixBlendMode: 'difference',
          zIndex: 9998,
          pointerEvents: 'none',
          transform: 'translateX(-6px)',
          opacity: glitchData.opacity,
        }} />
      )}
    </>
  )
}