import React from 'react';
import styled from 'styled-components';

import Profile from './Profile/Profile';
import SocialMedia from './SocialMedia';
import Menu from './Menu';
import { ThemeSwitcher } from './Theme';

const SidebarWrapper = styled.aside`
  background-color: var(--sidebar-background);
  border-top: 8px solid var(--sidebar-background);
  grid-area: sidebar;
  min-height: 100vh;
  padding: 1.5rem;
  position: fixed;
  width: 20rem;
`;

const SidebarSeparator = styled.hr`
  background: var(--background);
  border: 0;
  border-bottom: 1px solid var(--background);
  margin: 1rem 0;
`;

const SidebarTheme = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SidebarSeparator />
    <Menu />
    <SidebarSeparator />
    <SocialMedia />
    <SidebarTheme>
      <ThemeSwitcher />
    </SidebarTheme>
  </SidebarWrapper>
);

export default Sidebar;
