'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used by Navbar to switch between transparent and opaque backgrounds.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
