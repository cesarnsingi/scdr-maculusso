'use client'

import { useState, useCallback } from 'react'
import type { Locale, Translations } from '@/types'
import { translations } from '@/i18n/translations'

interface UseLocaleReturn {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

/**
 * Hook that manages the active language and exposes typed translation strings.
 * Use at the top-level page component and pass `t` + `locale` down via props
 * or React Context.
 */
export function useLocale(defaultLocale: Locale = 'pt'): UseLocaleReturn {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState(prev => (prev === 'pt' ? 'en' : 'pt'))
  }, [])

  return {
    locale,
    t: translations[locale],
    setLocale,
    toggleLocale,
  }
}
