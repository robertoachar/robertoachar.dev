import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../SEO';
import Container from '../Container';
import Heading1 from '../MDX/Heading1';
import PostList from './PostList';
// import Pagination from './Pagination';

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
            slug
            title
            description
            date(formatString: "DD/MM/YYYY", locale: "pt-BR")
            category
            tags
            photoCredit
            photoLink
            photo {
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

const PostListTemplate = ({ data, pageContext }) => {
  // const { currentPage, totalPages } = pageContext;

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Heading1>Blog</Heading1>
        <PostList posts={data.posts.edges} />
        {/* <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
      </Container>
    </Layout>
  );
};

PostListTemplate.propTypes = {
  data: t.shape({
    posts: t.shape({
      edges: t.arrayOf(t.object)
    })
  }).isRequired,
  pageContext: t.shape({
    currentPage: t.number,
    totalPages: t.number
  }).isRequired
};

export default PostListTemplate;
