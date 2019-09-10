import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: ${({ theme }) => theme.space.normal};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}) {
    padding: ${({ theme }) => theme.space.medium};
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: t.node.isRequired
};

export default Container;
