import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Content from '../components/Content';

import AboutContent from '../../content/pages/about.mdx';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 1.5rem 1rem;
`;

const IndexPage = () => (
  <Container>
    <SEO title="Sobre mim" />
    <Content>
      <AboutContent />
    </Content>
  </Container>
);

export default IndexPage;
