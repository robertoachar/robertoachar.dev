const path = require('path');

const createBlog = ({ createPage, data, component }) => {
  const { edges } = data;

  const postsPerPage = 50;
  const totalPages = Math.ceil(edges.length / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, index) => {
    createPage({
      component,
      path: index === 0 ? '/blog' : `/blog/page/${index + 1}`,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        totalPages,
        currentPage: index + 1
      }
    });
  });
};

const createPosts = ({ createPage, data, component }) => {
  const { edges } = data;

  edges.forEach(({ node, previous, next }) => {
    createPage({
      component,
      path: `blog/${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug,
        // ORDER: DESC
        previousPost: next,
        nextPost: previous
      }
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    query AllContent {
      blog: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  const { createPage } = actions;
  const { blog } = data;

  createBlog({
    createPage,
    data: blog,
    component: path.resolve('./src/components/Blog/PostListTemplate.jsx')
  });

  createPosts({
    createPage,
    data: blog,
    component: path.resolve('./src/components/Blog/PostTemplate.jsx')
  });
};
