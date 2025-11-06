import { createContext, useContext } from 'react'

export type Language = 'en' | 'ko'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  return {
    language: context?.language ?? 'en',
    setLanguage: context?.setLanguage,
  }
}
