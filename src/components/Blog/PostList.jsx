import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostsContainer = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  padding: 2.5rem;
`;

const PostList = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map(
        ({
          node: {
            frontmatter: post,
            timeToRead,
            fields: { slug }
          }
        }) => (
          <PostItem
            key={slug}
            post={post}
            slug={slug}
            timeToRead={timeToRead}
          />
        )
      )}
    </PostsContainer>
  );
};

PostList.propTypes = {
  posts: t.arrayOf(
    t.shape({
      node: t.shape({
        frontmatter: t.shape({
          title: t.string,
          category: t.string,
          date: t.string,
          description: t.string
        }),
        timeToRead: t.number,
        fields: t.shape({
          slug: t.string
        })
      })
    })
  ).isRequired
};

export default PostList;
