import styled from 'styled-components';

const Markup = styled.pre`
  /* TODO: wtf is this display: grid ??? */
  display: grid;

  .token-line {
    &:last-child {
      display: none;
    }
  }
`;

export default Markup;
