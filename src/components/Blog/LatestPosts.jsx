import React from 'react';
import t from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import PostList from './PostList';

const query = graphql`
  query LatestPosts {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "//content/blog//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
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

const PostListTemplate = () => {
  const { posts } = useStaticQuery(query);

  return <PostList posts={posts.edges} />;
};

PostListTemplate.propTypes = {
  data: t.shape({
    posts: t.shape({
      edges: t.arrayOf(t.object)
    })
  }).isRequired
};

export default PostListTemplate;
