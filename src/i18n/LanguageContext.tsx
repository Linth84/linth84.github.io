import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  translations,
  type Language,
} from './translations'

/* =========================================================
   TYPES
   ========================================================= */

type Translation =
  (typeof translations)[keyof typeof translations]

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Translation
}

/* =========================================================
   CONTEXT
   ========================================================= */

const LanguageContext =
  createContext<LanguageContextValue | undefined>(
    undefined,
  )

type LanguageProviderProps = {
  children: ReactNode
}

/* =========================================================
   PROVIDER
   ========================================================= */

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>(() => {
      const savedLanguage =
        localStorage.getItem('portfolio-language')

      if (
        savedLanguage === 'en' ||
        savedLanguage === 'es'
      ) {
        return savedLanguage
      }

      return 'en'
    })

  /* =======================================================
     SAVE LANGUAGE
     ======================================================= */

  useEffect(() => {
    localStorage.setItem(
      'portfolio-language',
      language,
    )

    document.documentElement.lang = language
  }, [language])

  /* =======================================================
     TOGGLE
     ======================================================= */

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en'
        ? 'es'
        : 'en',
    )
  }

  /* =======================================================
     CONTEXT VALUE
     ======================================================= */

  const value =
    useMemo<LanguageContextValue>(
      () => ({
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }),
      [language],
    )

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/* =========================================================
   HOOK
   ========================================================= */

export function useLanguage() {
  const context =
    useContext(LanguageContext)

  if (context === undefined) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider',
    )
  }

  return context
}