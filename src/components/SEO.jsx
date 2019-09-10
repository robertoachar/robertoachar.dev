import React from 'react';
import t from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, slug, type, image, imageAlt, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${slug}`;
  const metaType = type || 'website';
  const metaImage = `${site.siteMetadata.siteUrl}${image || '/banner.png'}`;
  const metaImageAlt = imageAlt || 'robertoachar.dev';

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-BR'
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: metaUrl
        },
        {
          property: 'og:type',
          content: metaType
        },
        {
          property: 'og:title',
          content: metaTitle
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:image',
          content: metaImage
        },
        {
          property: 'og:image:alt',
          content: metaImageAlt
        },
        {
          property: 'og:image:height',
          content: '1366'
        },
        {
          property: 'og:image:width',
          content: '768'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: metaTitle
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:image',
          content: metaImage
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        }
      ].concat(meta)}
    />
  );
};

SEO.propTypes = {
  title: t.string,
  description: t.string,
  slug: t.string,
  type: t.string,
  image: t.string,
  imageAlt: t.string,
  meta: t.arrayOf(t.object)
};

SEO.defaultProps = {
  title: '',
  description: '',
  slug: '/',
  type: '',
  image: '',
  imageAlt: '',
  meta: []
};

export default SEO;
