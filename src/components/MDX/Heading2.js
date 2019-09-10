import styled from 'styled-components';

const Markup = styled.h2`
  color: var(--heading);
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: ${({ theme }) => theme.space.large};
`;

export default Markup;
