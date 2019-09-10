import styled from 'styled-components';

const Markup = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.6;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.space.normal};
  }
`;

export default Markup;
