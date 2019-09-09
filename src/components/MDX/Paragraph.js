import styled from 'styled-components';

const Markup = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.5;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export default Markup;
