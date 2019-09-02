/* eslint react/no-danger: 0 */

import React from 'react';
import t from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../SEO';
import * as POST from './Post';
import OtherPosts from './OtherPosts';

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY", locale: "pt-BR")
      }
      html
      timeToRead
    }
  }
`;

const PostTemplate = ({ data: { markdownRemark: post }, pageContext }) => {
  const { previousPost, nextPost } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <POST.PostHeader>
        <POST.PostDate>
          {`${post.frontmatter.date} - ${post.timeToRead} min de leitura`}
        </POST.PostDate>
        <POST.PostTitle>{post.frontmatter.title}</POST.PostTitle>
        <POST.PostDescription>
          {post.frontmatter.description}
        </POST.PostDescription>
      </POST.PostHeader>
      <POST.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </POST.MainContent>
      <OtherPosts previous={previousPost} next={nextPost} />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: t.shape({
    markdownRemark: t.shape({
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
