import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontFamily.default};
    font-size: ${props => props.theme.fontSize.default};
    color: ${props => props.theme.color.text};
    line-height: 1.5;
    margin: 0;
  }

  input, textarea {
    font-family: ${props => props.theme.fontFamily.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamily.bold};
    margin: 2px 0;
    line-height: 1;
    font-weight: unset;
  }

  button {
    font-family: ${props => props.theme.fontFamily.bold};
    margin: 0;
    line-height: 1;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  small {
    line-height: 1;
  }

  ol {
    padding: 0 1.2rem;
  }

  img {
    vertical-align: middle;
  }


`

export default GlobalStyle
