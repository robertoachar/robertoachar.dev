import styled from 'styled-components';

const Markup = styled.h1`
  color: var(--highlight);
  font-size: ${({ theme }) => theme.font.size.huge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 2.5rem;
`;

export default Markup;
