import React from 'react'
import Home from '~/pages/Home'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyle, theme } from './config/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Home />
    </ThemeProvider>
  )
}

export default App
