import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuWrapper = styled.nav``;

const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1fa1f2;
  }
`;

const MenuLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Blog',
    to: '/blog'
  },
  {
    label: 'Sobre',
    to: '/about'
  }
];

const Menu = () => (
  <MenuWrapper>
    <MenuList>
      {links.map((link) => {
        return (
          <MenuItem key={link.label}>
            <MenuLink to={link.to} activeClassName="active">
              {link.label}
            </MenuLink>
          </MenuItem>
        );
      })}
    </MenuList>
  </MenuWrapper>
);

export default Menu;
