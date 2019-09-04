import styled from 'styled-components';

const Content = styled.section`
  h1,
  p {
    border: 0;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  p {
    color: var(--text-light);
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
`;

export default Content;
