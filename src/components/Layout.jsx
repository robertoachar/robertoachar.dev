import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import Root from './Root';
import Sidebar from './Sidebar';

const Container = styled.section`
  display: grid;
  grid-template-areas: 'main';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: 320px 1fr;
  }
`;

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.colors['blue-grey-900']};
  grid-area: sidebar;
  height: 100%;
  overflow-y: auto;
  padding: 1.5rem;
  position: fixed;
  transform: translateX(-320px);
  transition: transform 0.5s ease-in-out;
  width: 320px;
  z-index: 2;

  &.active {
    transform: translateX(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}) {
    transform: translateX(0);
  }
`;

const Main = styled.main`
  grid-area: main;
`;

const OpenButton = styled.button`
  left: 8px;
  position: fixed;
  top: 4px;
  z-index: 1;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 4px;
  visibility: visible;

  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}) {
    visibility: hidden;
  }
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Root>
      <Container>
        <OpenButton type="button" onClick={toggle}>
          OPEN
        </OpenButton>
        <Aside className={open ? 'active' : ''}>
          <CloseButton type="button" onClick={toggle}>
            CLOSE
          </CloseButton>
          <Sidebar />
        </Aside>
        <Main>{children}</Main>
      </Container>
    </Root>
  );
};

Layout.propTypes = {
  children: t.node.isRequired
};

export default Layout;
