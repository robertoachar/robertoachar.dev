import React from 'react';
import t from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description, image, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = `${site.siteMetadata.url}${image || '/banner.png'}`;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-BR'
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:image`,
          content: metaImage
        }
      ].concat(meta)}
    />
  );
}

SEO.propTypes = {
  title: t.string.isRequired,
  description: t.string,
  image: t.string,
  meta: t.arrayOf(t.object)
};

SEO.defaultProps = {
  description: '',
  image: null,
  meta: []
};

export default SEO;
