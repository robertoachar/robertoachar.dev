import styled from 'styled-components';

const Markup = styled.li`
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.space.normal};
  }
`;

export default Markup;
