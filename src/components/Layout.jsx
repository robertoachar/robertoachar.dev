import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Root from './Root';
import Sidebar from './Sidebar';
import Menubar from './Menubar';

const Container = styled.section`
  display: flex;
`;

const Main = styled.main`
  background: #333;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Root>
      <Container>
        <Sidebar />
        <Main>{children}</Main>
        <Menubar />
      </Container>
    </Root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
