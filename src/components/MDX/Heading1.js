import styled from 'styled-components';

const Markup = styled.h1`
  color: var(--highlight);
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export default Markup;
