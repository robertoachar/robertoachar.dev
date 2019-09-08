import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

const Content = styled.article`
  font-size: 1.25rem;
  margin-top: 2rem;

  h2 {
    color: var(--highlight);
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: normal;
    margin-top: 2.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 1rem;
  }

  a {
    color: var(--highlight);
    text-decoration: dotted;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-top: 1rem;
  }

  ol {
    list-style: decimal;
    margin-left: 1.5rem;
    margin-top: 1rem;
  }

  li {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  blockquote {
    border-left: 4px solid var(--highlight);
    padding-left: 1.5rem;
    font-style: italic;
  }

  code {
    background-color: var(--secondary);
    border-radius: ${({ theme }) => theme.radius['radius-100']};
    padding: 0.125rem 0.25rem;
  }

  pre {
    .token-line {
      &:last-child {
        display: none;
      }
    }
  }
`;

const PostContent = ({ children }) => <Content>{children}</Content>;

PostContent.propTypes = {
  children: t.node.isRequired
};

export default PostContent;
