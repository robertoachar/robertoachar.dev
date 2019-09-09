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
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY", locale: "pt-BR")
        photoCredit
        photoLink
        photo {
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

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { previousPost, nextPost } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <PostHeader post={post.frontmatter} timeToRead={post.timeToRead} />
        <PostPhoto
          photo={post.frontmatter.photo}
          photoCredit={post.frontmatter.photoCredit}
          photoLink={post.frontmatter.photoLink}
        />
        <MdxRenderer>{post.body}</MdxRenderer>
        <OtherPosts previous={previousPost} next={nextPost} />
      </Container>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: t.shape({
    mdx: t.shape({
      title: t.string,
      description: t.string,
      date: t.string,
      photoCredit: t.string,
      photoLink: t.string,
      photo: t.shape({
        childImageSharp: t.shape({
          fluid: t.object
        })
      })
    })
  }).isRequired,
  pageContext: t.shape({
    previousPost: t.shape({
      fields: t.shape({
        slug: t.string
      }),
      frontmatter: t.shape({
        title: t.string
      })
    }),
    nextPost: t.shape({
      fields: t.shape({
        slug: t.string
      }),
      frontmatter: t.shape({
        title: t.string
      })
    })
  }).isRequired
};

export default PostTemplate;
