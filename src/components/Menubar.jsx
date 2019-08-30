import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenubarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`;

const MenubarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenubarLink = styled(Link)`
  display: block;
`;

const MenubarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
`;

const MenuBar = () => (
  <MenubarWrapper>
    <MenubarGroup>
      <MenubarLink to="/" title="Home">
        <MenubarItem>
          <FontAwesomeIcon icon={['fas', 'home']} fixedWidth />
        </MenubarItem>
      </MenubarLink>
      <MenubarLink to="/search" title="Pesquisar">
        <MenubarItem>
          <FontAwesomeIcon icon={['fas', 'search']} fixedWidth />
        </MenubarItem>
      </MenubarLink>
      <MenubarLink to="/courses" title="Cursos">
        <MenubarItem>
          <FontAwesomeIcon icon={['fas', 'desktop']} fixedWidth />
        </MenubarItem>
      </MenubarLink>
    </MenubarGroup>

    <MenubarGroup>
      <MenubarItem title="Mudar o tema">
        <FontAwesomeIcon icon={['fas', 'lightbulb']} fixedWidth />
      </MenubarItem>
      <MenubarItem title="Mudar visualização">
        <FontAwesomeIcon icon={['fas', 'th']} fixedWidth />
      </MenubarItem>
      <MenubarItem title="Ir para o topo">
        <FontAwesomeIcon icon={['fas', 'arrow-up']} fixedWidth />
      </MenubarItem>
    </MenubarGroup>
  </MenubarWrapper>
);

export default MenuBar;
