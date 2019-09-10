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
  margin-bottom: ${({ theme }) => theme.space.small};
  margin-top: ${({ theme }) => theme.space.normal};
`;

const SidebarTheme = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.medium};
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
