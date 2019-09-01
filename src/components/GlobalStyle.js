import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #f0f4f8;
    color: #000000;
    font-family: proxima-nova, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    border: 0;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
