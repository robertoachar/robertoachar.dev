/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import t from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';

import './Icons';
import theme, { GlobalStyle } from './Theme';
import Code from './Code';

const Pre = styled.div`
  /* TODO: wtf is this display: grid ??? */
  display: grid;
`;

const components = {
  pre: (props) => <Pre {...props} />,
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
