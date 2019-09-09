import styled from 'styled-components';

const Markup = styled.h2`
  color: var(--highlight);
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: 1.5rem;
`;

export default Markup;
