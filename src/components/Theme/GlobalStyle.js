import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    --yellow: ${({ theme }) => theme.colors.yellow};
  }

  body.dark {
    --background: ${({ theme }) => theme.colors['blue-grey-800']};
    --background-dark: ${({ theme }) => theme.colors['blue-grey-900']};
    --text: ${({ theme }) => theme.colors['blue-grey-200']};
    --text-light: ${({ theme }) => theme.colors['grey-500']};
  }

  body.light {
    --background: ${({ theme }) => theme.colors['blue-grey-050']};
    --background-dark: ${({ theme }) => theme.colors['blue-grey-100']};
    --text: ${({ theme }) => theme.colors['blue-grey-800']};
    --text-light: ${({ theme }) => theme.colors['grey-600']};
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: ${({ theme }) => theme.font.family.sans};
    font-size: ${({ theme }) => theme.font.size.normal};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    text-align: left;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  button {
    border: 0;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: color 0.5s;
  }

  button {
    background: none;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`;

export default GlobalStyle;
