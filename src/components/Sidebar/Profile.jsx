import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Heading1, Hyperlink, Paragraph } from '../Common';
import Avatar from './Avatar';

const ProfileWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProfileLink = styled(Hyperlink)`
  color: ${({ theme }) => theme.colors['blue-500']};

  &:hover {
    color: ${({ theme }) => theme.colors['blue-300']};
  }
`;

const ProfileAuthor = styled(Heading1)`
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  margin-top: 1rem;
  text-transform: uppercase;
`;

const ProfileRole = styled(Paragraph)`
  color: ${({ theme }) => theme.colors['blue-grey-200']};
  margin-top: 0.25rem;
`;

const ProfileDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors['blue-grey-400']};
  margin-top: 1.5rem;
`;

const Profile = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { title }
    }
  } = data;

  return (
    <ProfileWrapper>
      <ProfileLink to="/">
        <Avatar />
        <ProfileAuthor>{title}</ProfileAuthor>
        <ProfileRole>Full Stack Web Developer</ProfileRole>
      </ProfileLink>
      <ProfileDescription>
        Tentando me tornar melhor do que fui ontem.
      </ProfileDescription>
    </ProfileWrapper>
  );
};

export default Profile;
