import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PostList = ({ data }) => {
  return (
    <Layout>
      <h1>Post List</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
