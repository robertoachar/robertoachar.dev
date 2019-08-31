const query = `{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          category
          date_timestamp: date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
          description
        }
        fields {
          slug
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }));

const queries = [
  {
    query,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'POSTS',
    settings: {
      attributesToSnippet: ['excerpt:20']
    }
  }
];

module.exports = queries;
