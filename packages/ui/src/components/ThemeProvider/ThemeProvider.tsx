import React, { createContext, useContext } from 'react'
import { theme } from '../../theme'

const ThemeContext = createContext(theme)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeContext.Provider value={theme}></ThemeContext.Provider>
}

export default ThemeProvider
