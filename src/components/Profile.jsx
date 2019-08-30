import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Avatar from './Avatar';

const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`;

const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`;

const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
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
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>Full Stack Web Developer</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente?
      </ProfileDescription>
    </ProfileWrapper>
  );
};

export default Profile;
