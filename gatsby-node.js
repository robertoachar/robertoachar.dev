const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    query AllPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;

    const postsPerPage = 5;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/page/${index + 1}`,
        component: path.resolve('./src/components/Blog/PostListTemplate.jsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      });
    });

    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: `blog${node.frontmatter.slug}`,
        component: path.resolve('./src/components/Blog/PostTemplate.jsx'),
        context: {
          slug: node.frontmatter.slug,
          // ORDER: DESC
          previousPost: next,
          nextPost: previous
        }
      });
    });
  });
};
