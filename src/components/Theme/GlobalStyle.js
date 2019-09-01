import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body.dark {
    --background: ${({ theme }) => theme.colors['blue-grey-800']};
    --body: ${({ theme }) => theme.colors['blue-grey-200']};
    --sidebar-background: ${({ theme }) => theme.colors['blue-grey-900']};
  }

  body.light {
    --background: ${({ theme }) => theme.colors['blue-grey-200']};
    --body: ${({ theme }) => theme.colors['blue-grey-800']};
    --sidebar-background: ${({ theme }) => theme.colors['blue-grey-900']};
  }

  body {
    background-color: var(--background);
    color: var(--body);
    font-family: ${({ theme }) => theme.font.family.sansSerif};
    font-size: ${({ theme }) => theme.font.size.normal};
    font-weight: ${({ theme }) => theme.font.weight.normal};
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
