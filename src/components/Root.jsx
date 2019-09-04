/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import t from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';

import './Icons';
import theme, { GlobalStyle } from './Theme';
import Code from './Code';

const components = {
  code: (props) => <Code {...props} />
};

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  </ThemeProvider>
);

Root.propTypes = {
  children: t.node.isRequired
};

export default Root;
