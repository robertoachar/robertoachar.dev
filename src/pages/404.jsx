import React from 'react';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const IndexPage = () => (
  <Container>
    <PageTitle>Página não encontrada</PageTitle>
  </Container>
);

export default IndexPage;
