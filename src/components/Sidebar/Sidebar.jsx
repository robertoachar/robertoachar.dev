import React from 'react';
import styled from 'styled-components';

import Profile from './Profile';
import SocialMedia from './SocialMedia';
import Menu from './Menu';
import { ThemeSwitcher } from '../Theme';

const SidebarSeparator = styled.hr`
  background: ${({ theme }) => theme.colors['blue-grey-800']};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors['blue-grey-800']};
  margin: 1rem 0;
`;

const SidebarTheme = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Sidebar = () => (
  <>
    <Profile />
    <SidebarSeparator />
    <Menu />
    <SidebarSeparator />
    <SocialMedia />
    <SidebarTheme>
      <ThemeSwitcher />
    </SidebarTheme>
  </>
);

export default Sidebar;
