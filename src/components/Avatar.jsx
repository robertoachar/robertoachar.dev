import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Photo = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
`;

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

  return <Photo fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
