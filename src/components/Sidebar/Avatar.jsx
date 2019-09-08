import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors['blue-grey-800']};
  border-radius: ${({ theme }) => theme.radius['radius-full']};
  margin: auto;
  max-width: 8rem;
  padding: 0.25rem;
`;

const Photo = styled(Img)`
  border-radius: ${({ theme }) => theme.radius['radius-full']};
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
