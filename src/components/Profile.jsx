import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

  return <h1>{title}</h1>;
};

export default Profile;
