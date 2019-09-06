import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../SEO';
import PostList from './PostList';
import Pagination from './Pagination';
import { Heading1 } from '../Common';

export const query = graphql`
  query AllPosts($limit: Int!, $skip: Int!) {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "//content/blog//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "DD/MM/YYYY", locale: "pt-BR")
            category
            tags
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;

const PostListTemplate = ({
  data: {
    posts: { edges }
  },
  pageContext
}) => {
  const { currentPage, numPages } = pageContext;

  return (
    <>
      <SEO title="Blog" />
      <Heading1>Blog</Heading1>
      <PostList posts={edges} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
};

PostListTemplate.propTypes = {
  data: t.shape({
    posts: t.shape({
      edges: t.arrayOf(
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
      )
    })
  }).isRequired,
  pageContext: t.shape({
    currentPage: t.number,
    numPages: t.number
  }).isRequired
};

export default PostListTemplate;
