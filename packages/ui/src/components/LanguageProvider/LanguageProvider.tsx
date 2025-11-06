import { ReactNode, useState } from 'react'
import { LanguageContext, Language } from './LanguageContext'

export interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
  language?: Language
}

export const LanguageProvider = ({ children, defaultLanguage = 'en', language }: LanguageProviderProps) => {
  const [languageState, setLanguageState] = useState<Language>(language || defaultLanguage)
  return (
    <LanguageContext.Provider value={{ language: language || languageState, setLanguage: setLanguageState }}>
      {children}
    </LanguageContext.Provider>
  )
}
