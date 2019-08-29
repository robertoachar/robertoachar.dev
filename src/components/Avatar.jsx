import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
