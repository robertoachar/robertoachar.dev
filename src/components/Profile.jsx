import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Avatar from './Avatar';

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
    <>
      <Avatar />
      <h1>{title}</h1>
    </>
  );
};

export default Profile;
