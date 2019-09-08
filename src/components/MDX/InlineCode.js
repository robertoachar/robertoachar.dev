import styled from 'styled-components';

const Markup = styled.code`
  background-color: var(--secondary);
  border-radius: ${({ theme }) => theme.radius['radius-100']};
  padding: 0.125rem 0.25rem;
`;

export default Markup;
