import React from 'react';
import t from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import theme, { GlobalStyle } from './Theme';
import './Icons';

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

Root.propTypes = {
  children: t.node.isRequired
};

export default Root;
