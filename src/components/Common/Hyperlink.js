import styled from 'styled-components';
import { Link } from 'gatsby';

const Hyperlink = styled(Link)`
  color: #90cdf4;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #63b3ed;
  }
`;

export default Hyperlink;