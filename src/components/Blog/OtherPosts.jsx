import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostContainer = styled.section`
  align-items: center;
  background-color: var(--background-dark);
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space.normal};
  padding: 1.5rem 1rem;
`;

const PostLink = styled(Link)`
  color: var(--highlight);
  text-decoration: underline;

  &.previous:before {
    content: '\\2190';
    margin-right: ${({ theme }) => theme.space.small};
  }
  &.next:after {
    content: '\\2192';
    margin-left: ${({ theme }) => theme.space.small};
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
      slug: t.string.isRequired,
      title: t.string.isRequired
    })
  }),
  nextPost: t.shape({
    frontmatter: t.shape({
      slug: t.string.isRequired,
      title: t.string.isRequired
    })
  })
};

OtherPosts.defaultProps = {
  previousPost: null,
  nextPost: null
};

export default OtherPosts;
