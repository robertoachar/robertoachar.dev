import React from 'react';
import t from 'prop-types';

import Layout from './Layout';
import Container from './Container';

const PageLayout = ({ children }) => (
  <Layout>
    <Container>{children}</Container>
  </Layout>
);

PageLayout.propTypes = {
  children: t.node.isRequired
};

export default PageLayout;
