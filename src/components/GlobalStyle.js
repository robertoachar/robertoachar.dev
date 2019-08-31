import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    color: #000000;
    font-family: proxima-nova, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
