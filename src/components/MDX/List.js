import styled from 'styled-components';

const Markup = styled.ul`
  list-style: disc;
  margin-left: ${({ theme }) => theme.space.normal};
  margin-top: ${({ theme }) => theme.space.normal};
`;

export default Markup;
