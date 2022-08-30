import { css } from '@emotion/react'

// NOMES DAS CORES RETIRADOS DE www.htmlcsscolor.com
const color = {
  primary: '#7d6ee7',
  secondary: '#d8e76e',
  textColor: '#333333',
}

const space = {
  nano: '8px',
  small: '12px',
  default: '16px',
  large: '20px',
  extraLarge: '24px',
}

export const theme = {
  color,
  space,
}

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    color: ${color.textColor};
  }
`
