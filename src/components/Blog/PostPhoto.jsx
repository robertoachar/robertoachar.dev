/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Figure = styled.figure`
  margin-top: ${({ theme }) => theme.space.normal};
  position: relative;
`;

const Caption = styled.figcaption`
  background-color: var(--background-dark);
  bottom: 0;
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-style: italic;
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: 0;
`;

const Text = styled.span``;

const Link = styled.a`
  color: var(--highlight);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostPhoto = ({ photo, photoCredit, photoLink, photoAlt }) => (
  <Figure>
    <Img fluid={photo.childImageSharp.fluid} alt={photoAlt} />
    <Caption>
      <Text>Foto de </Text>
      <Link href={photoLink}>{photoCredit}</Link>
    </Caption>
  </Figure>
);

PostPhoto.propTypes = {
  photo: t.object.isRequired,
  photoCredit: t.string.isRequired,
  photoLink: t.string.isRequired,
  photoAlt: t.string.isRequired
};

export default PostPhoto;
