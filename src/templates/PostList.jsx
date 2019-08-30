import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Posts from '../components/Posts';

const PostList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Post List</h1>
      <Posts posts={posts} />
    </Layout>
  );
};

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
`;

export default PostList;
