import React from 'react';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostsContainer = styled.div``;

const Posts = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map(({ node: { frontmatter, timeToRead, fields: { slug } } }) => (
        <PostItem
          post={frontmatter}
          slug={slug}
          timeToRead={timeToRead}
        ></PostItem>
      ))}
    </PostsContainer>
  );
};

export default Posts;
