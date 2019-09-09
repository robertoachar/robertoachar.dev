import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: 20px;
    }
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
    --primary: ${({ theme }) => theme.colors['blue-grey-100']};
    --secondary: ${({ theme }) => theme.colors['blue-grey-200']};
    --highlight: ${({ theme }) => theme.colors['blue-300']};
  }

  body.light {
    --background: ${({ theme }) => theme.colors['blue-grey-100']};
    --background-dark: ${({ theme }) => theme.colors['blue-grey-050']};
    --primary: ${({ theme }) => theme.colors['blue-grey-900']};
    --secondary: ${({ theme }) => theme.colors['blue-grey-700']};
    --highlight: ${({ theme }) => theme.colors['blue-900']};
  }

  body {
    background-color: var(--background);
    color: var(--primary);
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
  blockquote,
  button,
  figure,
  pre {
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
    object-fit: cover;
  }
`;

export default GlobalStyle;
