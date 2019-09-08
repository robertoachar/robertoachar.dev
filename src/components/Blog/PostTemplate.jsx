import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';
import MdxRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import SEO from '../SEO';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import * as POST from './Post';
import OtherPosts from './OtherPosts';

export const query = graphql`
  query Post($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY", locale: "pt-BR")
      }
      body
      timeToRead
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { previousPost, nextPost } = pageContext;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <PostHeader post={post.frontmatter} timeToRead={post.timeToRead} />
      <PostContent>
        <MdxRenderer>{post.body}</MdxRenderer>
      </PostContent>
      <OtherPosts previous={previousPost} next={nextPost} />
    </>
  );
};

PostTemplate.propTypes = {
  data: t.shape({
    mdx: t.shape({
      title: t.string,
      description: t.string,
      date: t.string
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
