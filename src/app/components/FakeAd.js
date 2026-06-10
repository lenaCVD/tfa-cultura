'use client'

import { useState, useEffect } from 'react'

export default function FakeAd({ position = 'sidebar', triggerOnScroll = false }) {
  const [visible, setVisible] = useState(false)
  const [adType, setAdType] = useState('banner')
  const [clicked, setClicked] = useState(false)

  const ads = [
    {
      type: 'banner',
      title: '🔥 ¡APRENDE INGLÉS EN 24 HORAS! 🔥',
      text: 'Método revolucionario con IA — ¡Garantizado! (mentira)',
      cta: 'COMPRA AHORA →',
      color: 'var(--red)'
    },
    {
      type: 'popup',
      title: '¿CANSADO DE LEER?',
      text: 'Deja que nuestra IA resuma este artículo por ti. Solo 9.99€/mes.',
      cta: 'SUSCRÍBETE',
      color: 'var(--green)'
    },
    {
      type: 'native',
      title: 'Recomendado para ti',
      text: 'Basado en tu interés en "crítica digital" — esto te encantará (no preguntes cómo lo sabemos)',
      cta: 'VER MÁS',
      color: '#ff00ff'
    }
  ]

  useEffect(() => {
    if (!triggerOnScroll) {
      // Aparece después de unos segundos, como un ad real
      const timer = setTimeout(() => setVisible(true), 3000)
      const randomAd = Math.floor(Math.random() * ads.length)
      setAdType(ads[randomAd].type)
      return () => clearTimeout(timer)
    }
  }, [triggerOnScroll])

  useEffect(() => {
    if (triggerOnScroll) {
      const handleScroll = () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        if (scrollPercent > 0.4 && !visible) {
          setVisible(true)
          const randomAd = Math.floor(Math.random() * ads.length)
          setAdType(ads[randomAd].type)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [triggerOnScroll, visible])

  const currentAd = ads.find(ad => ad.type === adType) || ads[0]

  if (!visible) return null

  if (position === 'popup') {
    return (
      <>
        {/* Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }} onClick={() => setVisible(false)}>
          
          {/* Popup Ad */}
          <div style={{
            background: '#0a0a0a',
            border: `3px solid ${currentAd.color}`,
            padding: '2rem',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
            transform: clicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 0.1s',
            boxShadow: `0 0 20px ${currentAd.color}`,
            animation: 'glitchPopup 0.3s infinite',
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Botón cerrar falso - dark pattern */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              background: currentAd.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
            }} onClick={() => {
              // Falso cierre - redirige a otro anuncio
              setAdType(ads[(ads.findIndex(a => a.type === adType) + 1) % ads.length].type)
            }}>
              ✕
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: currentAd.color,
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}>
              {currentAd.title}
            </h3>
            
            <p style={{ marginBottom: '1.5rem', color: '#ccc', lineHeight: 1.5 }}>
              {currentAd.text}
            </p>
            
            <button style={{
              width: '100%',
              padding: '1rem',
              background: currentAd.color,
              color: '#000',
              border: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.1s',
            }} onClick={() => {
              setClicked(true)
              setTimeout(() => {
                alert('⚡ Has caído en un dark pattern. Este anuncio no lleva a ninguna parte. ⚡')
                setVisible(false)
              }, 100)
            }}>
              {currentAd.cta}
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes glitchPopup {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
        `}</style>
      </>
    )
  }

  // Banner ad (sidebar o inline)
  return (
    <div style={{
      position: position === 'sidebar' ? 'fixed' : 'relative',
      right: position === 'sidebar' ? '20px' : 'auto',
      top: position === 'sidebar' ? '100px' : 'auto',
      width: position === 'sidebar' ? '260px' : '100%',
      background: '#050505',
      border: `2px solid ${currentAd.color}`,
      padding: '1rem',
      zIndex: 9999,
      animation: 'glitchAd 0.2s infinite',
      cursor: 'pointer',
      transition: 'all 0.3s',
    }} onClick={() => {
      alert('⚠️ Este es un anuncio falso. Los anuncios reales también intentan capturar tu atención de formas que no controlas. ⚠️')
    }}>
      
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        color: currentAd.color,
        marginBottom: '0.5rem',
        letterSpacing: '0.1em',
      }}>
        PUBLICIDAD · PUBLICIDAD · PUBLICIDAD
      </div>
      
      <h4 style={{
        fontSize: '0.9rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        color: currentAd.color,
      }}>
        {currentAd.title}
      </h4>
      
      <p style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.75rem' }}>
        {currentAd.text}
      </p>
      
      <div style={{
        display: 'inline-block',
        background: currentAd.color,
        color: '#000',
        padding: '0.25rem 0.75rem',
        fontSize: '0.7rem',
        fontWeight: 700,
      }}>
        {currentAd.cta}
      </div>

      <style jsx>{`
        @keyframes glitchAd {
          0% { opacity: 1; transform: translateX(0); }
          95% { opacity: 1; transform: translateX(0); }
          96% { opacity: 0.3; transform: translateX(-3px); }
          97% { opacity: 1; transform: translateX(3px); }
          98% { opacity: 0.5; transform: translateX(-1px); }
          99% { opacity: 1; transform: translateX(1px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}