import React from 'react';
import styled from 'styled-components';

import Profile from './Profile';
import SocialMedia from './SocialMedia';
import Menu from './Menu';

const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #38444d;
  background-color: #192734;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialMedia />
    <Menu />
  </SidebarWrapper>
);

export default Sidebar;
