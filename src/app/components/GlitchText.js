'use client'

import { useEffect, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#$%&@'

export default function GlitchText({ text, as: Tag = 'span', className = '', style = {} }) {
  const [displayed, setDisplayed] = useState(text)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitching(true)
      let iterations = 0
      const interval = setInterval(() => {
        setDisplayed(
          text.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i < iterations) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join('')
        )
        iterations += 1
        if (iterations > text.length) {
          clearInterval(interval)
          setDisplayed(text)
          setGlitching(false)
        }
      }, 40)
    }

    triggerGlitch()
    const loop = setInterval(triggerGlitch, 6000)
    return () => clearInterval(loop)
  }, [text])

  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-display)',
        letterSpacing: glitching ? '0.05em' : '0',
        transition: 'letter-spacing 0.1s',
        ...style
      }}
    >
      {displayed}
    </Tag>
  )
}