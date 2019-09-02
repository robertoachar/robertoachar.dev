const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'blog'
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/blog/${slug.slice(12)}`
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    query AllPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
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
        path: node.fields.slug,
        component: path.resolve('./src/components/Blog/PostTemplate.jsx'),
        context: {
          slug: node.fields.slug,
          // ORDER: DESC
          previousPost: next,
          nextPost: previous
        }
      });
    });
  });
};
