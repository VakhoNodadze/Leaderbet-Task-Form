import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  fontFamily: {
    default: 'OpenSans-Regular, Roboto, sans-serif',
    bold: 'Mont-Bold, Roboto, sans-serif'
  },
  fontSize: {
    tiny: '11px',
    mini: '12px',
    small: '13px',
    default: '14px',
    big: '16px',
    large: '18px',
    heading: '26px'
  },
  color: {
    yellow: '#f2c841',
    white: '#fff',
    red: '#FF5050',
    border: '#c0c0c0',
    mainBg: '#262626',
    formBg: '#424242',
    inputBg: '#616161',
    buttonBg: '#cecece',
    buttonTxt: '#1b1b1b',
    whiteSecondary: 'rgba(255, 255, 255, .54)'
  },
  borderRadius: {
    tiny: '2px',
    small: '4px',
    default: '6px',
    big: '8px',
    circular: '100%',
    rounded: '100rem'
  }
}
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
