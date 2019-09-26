require('dotenv').config();

// const queries = require('./alogia-config');

module.exports = {
  siteMetadata: {
    title: 'Roberto Achar',
    description:
      'Minha missão é compartilhar o máximo de experiência e conhecimento que adquiri ao longo da minha carreira.',
    author: '@robertoachar',
    siteUrl: 'http://robertoachar.dev'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/components/PageLayout.jsx'),
          blog: require.resolve('./src/components/Layout.jsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-embedder'
          }
        ],
        plugins: [
          // https://github.com/gatsbyjs/gatsby/issues/15486
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Roberto Achar',
        short_name: 'Roberto Achar',
        start_url: '/',
        background_color: '#102A43',
        theme_color: '#F0F4F8',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-91775148-6'
      }
    },
    'gatsby-plugin-offline'
    // {
    //   resolve: `gatsby-plugin-algolia-search`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //     enablePartialUpdates: true
    //   }
    // }
  ]
};
