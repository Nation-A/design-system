import React, { createContext, useContext } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { system, theme } from '../../theme'

const ThemeContext = createContext(theme)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
