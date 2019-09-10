import styled from 'styled-components';

const Markup = styled.li`
  line-height: 1.6;
  word-break: break-word;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.space.normal};
  }
`;

export default Markup;
