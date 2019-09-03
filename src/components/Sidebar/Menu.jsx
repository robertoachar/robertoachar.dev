import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuContainer = styled.nav`
  margin: 0 -1.5rem;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  border-left: 8px solid transparent;
  color: #8899a6;
  display: block;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s, border-color 0.5s;

  &:hover,
  &.active {
    border-left: 8px solid #2b6cb0;
    color: #1fa1f2;
  }
`;

const links = [
  {
    label: 'Home',
    to: '/',
    partial: false
  },
  {
    label: 'Sobre',
    to: '/about',
    partial: true
  },
  {
    label: 'Blog',
    to: '/blog',
    partial: true
  }
];

const Menu = () => (
  <MenuContainer>
    <MenuList>
      {links.map((link) => {
        return (
          <MenuItem key={link.label}>
            <MenuLink
              to={link.to}
              activeClassName="active"
              partiallyActive={link.partial}
            >
              {link.label}
            </MenuLink>
          </MenuItem>
        );
      })}
    </MenuList>
  </MenuContainer>
);

export default Menu;
