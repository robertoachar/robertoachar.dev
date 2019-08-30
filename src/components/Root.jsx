import React from 'react';
import t from 'prop-types';

import GlobalStyle from './GlobalStyle';
import './Icons';

const Root = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Root.propTypes = {
  children: t.node.isRequired
};

export default Root;
