import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import * as POST from '../components/Post';
import OtherPosts from '../components/OtherPosts';

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previousPost, nextPost } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <POST.PostHeader>
        <POST.PostDate>
          {post.frontmatter.date} - {post.timeToRead} min de leitura
        </POST.PostDate>
        <POST.PostTitle>{post.frontmatter.title}</POST.PostTitle>
        <POST.PostDescription>
          {post.frontmatter.description}
        </POST.PostDescription>
      </POST.PostHeader>
      <POST.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </POST.MainContent>
      <OtherPosts previous={previousPost} next={nextPost} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
      }
      html
      timeToRead
    }
  }
`;

export default Post;
