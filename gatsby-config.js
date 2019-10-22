const netlifyFsAPI = require('netlify-cms-backend-fs/dist/fs');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: 'https://sandalboyz.com',
    title: 'SANDALBOYZ',
    description:
      'SANDALBOYZ is a movement and lifestyle, existing to bridge the gap between sophistication and comfort.',
  },
  developMiddleware: netlifyFsAPI,
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: ['/account/*'],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        manualInit: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline'
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@context': 'src/context',
          '@images': 'src/images',
          '@layouts': 'src/layouts',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SANDALBOYZ',
        short_name: 'SANDALBOYZ',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'bmy0pxx',
        },
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: process.env.GATSBY_SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        fields: ['title', 'tags'],
        resolvers: {
          ShopifyProduct: {
            title: node => node.title,
          },
        },
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-sitemap',
  ],
};
