import styled from 'styled-components';

const Markup = styled.h1`
  color: var(--primary);
  font-size: ${({ theme }) => theme.font.size.wide};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.font.size.huge};
  }
`;

export default Markup;
