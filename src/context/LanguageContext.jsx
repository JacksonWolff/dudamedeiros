import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { strings } from '../data/portfolio'

const STORAGE_KEY = 'dm.lang'
const LanguageContext = createContext(null)

function detectInitial() {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'pt') return stored
  } catch {
    // localStorage unavailable (private mode etc.) — fall through to detection
  }
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => detectInitial())

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore storage failures
    }
    document.documentElement.lang = strings[lang].htmlLang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: strings[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
