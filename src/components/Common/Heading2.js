import styled, { css } from 'styled-components';

const base = css`
  border: 0;
  margin: 0;
  padding: 0;
`;

const Heading2 = styled.h2`
  ${base}
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
`;

export default Heading2;
