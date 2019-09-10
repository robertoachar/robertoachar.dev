import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  z-index: 10;

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

const Header = styled.div`
  background-color: var(--background-dark);
  box-shadow: ${({ theme }) => theme.shadow['shadow-300']};
  display: flex;
  padding: ${({ theme }) => theme.space.normal};
  position: sticky;
  top: 0;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}) {
    display: none;
    position: static;
  }
`;

const Title = styled.span`
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-left: ${({ theme }) => theme.space.normal};
`;

const OpenButton = styled.button`
  color: var(--primary);
  cursor: pointer;
`;

const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors['blue-300']};
  cursor: pointer;
  position: absolute;
  right: ${({ theme }) => theme.space.normal};
  top: ${({ theme }) => theme.space.normal};
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
        <Aside className={open ? 'active' : ''}>
          <CloseButton type="button" onClick={toggle}>
            <FontAwesomeIcon icon={['fas', 'times']} fixedWidth size="1x" />
            <span className="sr-only">Fechar menu</span>
          </CloseButton>
          <Sidebar />
        </Aside>
        <Main>
          <Header>
            <OpenButton type="button" onClick={toggle}>
              <FontAwesomeIcon icon={['fas', 'bars']} fixedWidth size="1x" />
              <span className="sr-only">Abrir menu</span>
            </OpenButton>
            <Title>robertoachar.dev</Title>
          </Header>
          {children}
        </Main>
      </Container>
    </Root>
  );
};

Layout.propTypes = {
  children: t.node.isRequired
};

export default Layout;
