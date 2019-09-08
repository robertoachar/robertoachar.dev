import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem;
  width: 100%;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: t.node.isRequired
};

export default Container;
