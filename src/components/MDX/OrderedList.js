import styled from 'styled-components';

const Markup = styled.ol`
  list-style: decimal;
  margin-left: ${({ theme }) => theme.space.medium};
  margin-top: ${({ theme }) => theme.space.normal};
`;

export default Markup;
