import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import Root from './Root';
import Sidebar from './Sidebar';

const Container = styled.section`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-areas: 'sidebar main';
`;

const Main = styled.main`
  border-top: 8px solid var(--sidebar-background);
  grid-area: main;
  margin: 0 auto;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Root>
      <Container>
        <Sidebar />
        <Main>{children}</Main>
      </Container>
    </Root>
  );
};

Layout.propTypes = {
  children: t.node.isRequired
};

export default Layout;
