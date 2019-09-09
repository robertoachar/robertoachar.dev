import styled from 'styled-components';

const Markup = styled.blockquote`
  border-left: 4px solid var(--highlight);
  color: var(--secondary);
  font-style: italic;
  padding-left: ${({ theme }) => theme.space.medium};
  margin-top: ${({ theme }) => theme.space.normal};
`;

export default Markup;
