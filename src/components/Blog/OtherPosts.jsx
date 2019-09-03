import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import { Link } from 'gatsby';

const PostContainer = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
`;

const PostLink = styled(Link)`
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;

const OtherPosts = ({ nextPost, previousPost }) => (
  <PostContainer>
    {previousPost && (
      <PostLink to={previousPost.frontmatter.slug} className="previous">
        {previousPost.frontmatter.title}
      </PostLink>
    )}

    {nextPost && (
      <PostLink to={nextPost.frontmatter.slug} className="next">
        {nextPost.frontmatter.title}
      </PostLink>
    )}
  </PostContainer>
);

OtherPosts.propTypes = {
  previousPost: t.shape({
    frontmatter: t.shape({
      title: t.string,
      slug: t.string
    })
  }),
  nextPost: t.shape({
    frontmatter: t.shape({
      title: t.string,
      slug: t.string
    })
  })
};

OtherPosts.defaultProps = {
  previousPost: null,
  nextPost: null
};

export default OtherPosts;
