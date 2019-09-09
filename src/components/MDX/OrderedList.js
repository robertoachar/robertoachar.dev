import styled from 'styled-components';

const Markup = styled.ol`
  list-style: decimal;
  margin-left: ${({ theme }) => theme.space.normal};
  margin-top: ${({ theme }) => theme.space.normal};
`;

export default Markup;
