import React from 'react';
import styled from 'styled-components';

import Profile from './Profile/Profile';
import SocialMedia from './SocialMedia';
import Menu from './Menu';

const SidebarWrapper = styled.aside`
  background-color: #102a43;
  border-top: 8px solid #102a43;
  grid-area: sidebar;
  min-height: 100vh;
  padding: 1.5rem;
  width: 20rem;
`;

const SidebarSeparator = styled.hr`
  background: #334e68;
  border: 0;
  border-bottom: 1px solid #334e68;
  margin: 1rem 0;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SidebarSeparator />
    <Menu />
    <SidebarSeparator />
    <SocialMedia />
  </SidebarWrapper>
);

export default Sidebar;
