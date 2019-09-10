import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';
import MdxRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from '../Layout';
import SEO from '../SEO';
import Container from '../Container';
import PostHeader from './PostHeader';
import PostPhoto from './PostPhoto';
import OtherPosts from './OtherPosts';

export const query = graphql`
  query Post($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY", locale: "pt-BR")
        category
        tags
        photoCredit
        photoLink
        photo {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1366) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      timeToRead
    }
  }
`;

const PostTemplate = ({ data, pageContext }) => {
  const { post } = data;
  const { previousPost, nextPost } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.photo.publicURL}
      />
      <Container>
        <PostHeader post={post.frontmatter} timeToRead={post.timeToRead} />
        <PostPhoto
          photo={post.frontmatter.photo}
          photoCredit={post.frontmatter.photoCredit}
          photoLink={post.frontmatter.photoLink}
        />
        <MdxRenderer>{post.body}</MdxRenderer>
        {/* <OtherPosts previousPost={previousPost} nextPost={nextPost} /> */}
      </Container>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: t.shape({
    post: t.shape({
      frontmatter: t.shape({
        title: t.string,
        description: t.string,
        date: t.string,
        category: t.string,
        tags: t.arrayOf(t.string),
        photoCredit: t.string,
        photoLink: t.string,
        photo: t.shape({
          publicURL: t.string,
          childImageSharp: t.shape({
            fluid: t.object
          })
        })
      }),
      body: t.string,
      timeToRead: t.number
    })
  }).isRequired,
  pageContext: t.shape({
    previousPost: t.shape({
      frontmatter: t.shape({
        slug: t.string.isRequired,
        title: t.string.isRequired
      })
    }),
    nextPost: t.shape({
      frontmatter: t.shape({
        slug: t.string.isRequired,
        title: t.string.isRequired
      })
    })
  }).isRequired
};

export default PostTemplate;
