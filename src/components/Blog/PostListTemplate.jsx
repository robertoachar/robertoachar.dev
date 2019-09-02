import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../SEO';
import PostList from './PostList';
import Pagination from './Pagination';
import { Heading1 } from '../Common';

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            date(formatString: "DD/MM/YYYY", locale: "pt-BR")
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
`;

const PostListTemplate = ({
  data: {
    allMarkdownRemark: { edges: posts }
  },
  pageContext
}) => {
  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      <SEO title="Blog" />
      <Heading1>Blog</Heading1>
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

PostListTemplate.propTypes = {
  data: t.shape({
    allMarkdownRemark: t.shape({
      edges: t.arrayOf(
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
      )
    })
  }).isRequired,
  pageContext: t.shape({
    currentPage: t.number,
    numPages: t.number
  }).isRequired
};

export default PostListTemplate;