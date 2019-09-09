import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Avatar from './Avatar';

const ProfileWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProfileLink = styled(Link)`
  color: ${({ theme }) => theme.colors['blue-grey-100']};

  &:hover {
    color: ${({ theme }) => theme.colors['blue-300']};
  }
`;

const ProfileAuthor = styled.h1`
  font-size: ${({ theme }) => theme.font.size.medium};
  margin-top: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;

const ProfileRole = styled.p`
  color: ${({ theme }) => theme.colors['blue-grey-200']};
  margin-top: 0.25rem;
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
    </ProfileWrapper>
  );
};

export default Profile;
