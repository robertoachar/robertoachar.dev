import styled from 'styled-components';

const Markup = styled.code`
  background-color: var(--background-dark);
  border-radius: ${({ theme }) => theme.radius['radius-100']};
  font-family: ${({ theme }) => theme.font.family.mono};
  padding: 0.125rem 0.25rem;
`;

export default Markup;
