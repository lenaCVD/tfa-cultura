'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#paradigma', label: 'Paradigma' },
  { href: '#slop', label: 'Slop' },
  { href: '#bombolles', label: 'Bombolles' },
  { href: '#biaixos', label: 'Biaixos' },
  { href: '#atencio', label: 'Atenció' },
  { href: '#agencia', label: 'Agència' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = links.map(l => document.querySelector(l.href))
      sections.forEach((section, i) => {
        if (!section) return
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(links[i].href)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: '3px',
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--mid)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--red)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        Internet / IA
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              color: active === link.href ? 'var(--red)' : 'var(--fg)',
              opacity: active === link.href ? 1 : 0.5,
              textDecoration: 'none',
              transition: 'all 0.2s',
              letterSpacing: '0.05em',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}