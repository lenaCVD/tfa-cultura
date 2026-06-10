'use client'

import { useEffect, useState } from 'react'

export default function AttentionBar() {
  const [seconds, setSeconds] = useState(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrolled > 0.95) setRevealed(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const progress = Math.min((seconds / 180) * 100, 100)

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'var(--red)',
        zIndex: 9999,
        transition: 'width 1s linear',
      }} />

      {revealed && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--red)',
          color: '#000',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          padding: '1rem 1.5rem',
          maxWidth: '280px',
          zIndex: 9999,
          lineHeight: 1.5,
        }}>
          Has passat <strong>{seconds} segons</strong> en aquesta pàgina.<br />
          La teva atenció ha estat capturada.
        </div>
      )}
    </>
  )
}