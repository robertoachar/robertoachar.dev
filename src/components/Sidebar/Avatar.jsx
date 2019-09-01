import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  border: 2px solid #2c5282;
  border-radius: 50%;
  margin: auto;
  max-width: 8rem;
  padding: 0.25rem;
`;

const Photo = styled(Img)`
  border-radius: 50%;
  max-width: 100%;
`;

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Photo fluid={avatarImage.childImageSharp.fluid} />
    </Container>
  );
};

export default Avatar;
