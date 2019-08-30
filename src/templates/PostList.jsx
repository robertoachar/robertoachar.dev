import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';

const PostList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Post List</h1>
      <Posts posts={posts} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      ></Pagination>
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
