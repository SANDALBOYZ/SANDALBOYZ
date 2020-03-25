import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import shareImage from '@images/shareImage.jpg';

function SEO({
  description,
  lang,
  meta,
  image,
  schemaType,
  ogType,
  slug,
  title,
  additionalSchemaOrg,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const url = slug
          ? `${data.site.siteMetadata.siteUrl}${slug}`
          : `${data.site.siteMetadata.siteUrl}`;

        const schemaOrg = {
          '@context': 'http://schema.org',
          '@type': schemaType,
          name: title,
          description,
          url,
          ...additionalSchemaOrg,
        };

        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaImage = image || shareImage;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:image',
                content: `${data.site.siteMetadata.siteUrl}${metaImage}`,
              },
              {
                property: 'og:site_name',
                content: 'SANDALBOYZ',
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:type',
                content: ogType,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:site',
                content: '@sandalboyz',
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ].concat(meta)}
          >
            <script type="application/ld+json">
              {JSON.stringify(schemaOrg)}
            </script>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  schemaType: 'WebPage', // https://schema.org/WebPage
  ogType: 'website', // https://ogp.me/#type_website
  additionalSchemaOrg: {},
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  schemaType: PropTypes.string,
  ogType: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  additionalSchemaOrg: PropTypes.object,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
