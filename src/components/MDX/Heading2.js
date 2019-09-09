import styled from 'styled-components';

const Markup = styled.h2`
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: ${({ theme }) => theme.space.large};
`;

export default Markup;
