import styled from 'styled-components';

const Markup = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.6;
  word-break: break-word;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.space.normal};
  }

  & > .twitter-tweet {
    margin: 0 auto;
    width: auto !important;
  }
`;

export default Markup;
