import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 62.5%;
    position: relative;
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.primary};
    min-height: 100%;
    color: ${({ theme }) => theme.color.dark};
    background-color: ${({ theme }) => theme.color.background};
    overflow-x: hidden;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
