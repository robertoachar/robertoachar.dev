import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostsWrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.medium};
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  margin-top: ${({ theme }) => theme.space.medium};
`;

const PostList = ({ posts }) => {
  return (
    <PostsWrapper>
      {posts.map(({ node: { frontmatter, timeToRead } }) => (
        <PostItem
          key={frontmatter.slug}
          post={frontmatter}
          timeToRead={timeToRead}
        />
      ))}
    </PostsWrapper>
  );
};

PostList.propTypes = {
  posts: t.arrayOf(
    t.shape({
      node: t.shape({
        frontmatter: t.object,
        timeToRead: t.number
      })
    })
  ).isRequired
};

export default PostList;
