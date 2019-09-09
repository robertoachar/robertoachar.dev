/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Figure = styled.figure`
  margin-top: 1rem;
  position: relative;
`;

const Caption = styled.figcaption`
  background-color: var(--background-dark);
  bottom: 0;
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.tiny};
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

const PostCover = ({ fluid, link, name }) => (
  <Figure>
    <Img fluid={fluid} />
    <Caption>
      <Text>Foto de </Text>
      <Link href={link}>{name}</Link>
    </Caption>
  </Figure>
);

PostCover.propTypes = {
  fluid: t.object.isRequired,
  link: t.string.isRequired,
  name: t.string.isRequired
};

export default PostCover;
