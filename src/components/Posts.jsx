import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import PostItem from './PostItem';

const PostsContainer = styled.div``;

const Posts = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query AllPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
              description
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <PostsContainer>
      {edges.map(({ node: { frontmatter, timeToRead, fields: { slug } } }) => (
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
