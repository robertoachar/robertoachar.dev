import styled from 'styled-components';

const Markup = styled.h2`
  color: var(--highlight);
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-top: 2.5rem;
`;

export default Markup;
