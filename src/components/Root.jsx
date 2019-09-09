/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import t from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';

import './Icons';
import theme, { GlobalStyle } from './Theme';
import * as MDX from './MDX';

const components = {
  h1: (props) => <MDX.Heading1 {...props} />,
  h2: (props) => <MDX.Heading2 {...props} />,
  h3: (props) => <MDX.Heading3 {...props} />,
  p: (props) => <MDX.Paragraph {...props} />,
  a: (props) => <MDX.Link {...props} />,
  ul: (props) => <MDX.List {...props} />,
  ol: (props) => <MDX.OrderedList {...props} />,
  li: (props) => <MDX.ListItem {...props} />,
  blockquote: (props) => <MDX.Blockquote {...props} />,
  pre: (props) => <MDX.Pre {...props} />,
  code: (props) => <MDX.Code {...props} />,
  inlineCode: (props) => <MDX.InlineCode {...props} />
};

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <GlobalStyle />
      {children}
    </MDXProvider>
  </ThemeProvider>
);

Root.propTypes = {
  children: t.node.isRequired
};

export default Root;
