import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const IndexPage = () => (
  <Container>
    <SEO title="Sobre mim" />
    <PageTitle>Sobre mim</PageTitle>
  </Container>
);

export default IndexPage;
