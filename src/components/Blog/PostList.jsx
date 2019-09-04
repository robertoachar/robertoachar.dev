import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostsWrapper = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  margin-top: 2rem;
`;

const PostList = ({ posts }) => {
  return (
    <PostsWrapper>
      {posts.map(({ node: { frontmatter: post, timeToRead } }) => (
        <PostItem key={post.slug} post={post} timeToRead={timeToRead} />
      ))}
    </PostsWrapper>
  );
};

PostList.propTypes = {
  posts: t.arrayOf(
    t.shape({
      node: t.shape({
        frontmatter: t.shape({
          title: t.string,
          description: t.string,
          date: t.string,
          category: t.string,
          tags: t.arrayOf(t.string),
          slug: t.string
        }),
        timeToRead: t.number
      })
    })
  ).isRequired
};

export default PostList;
