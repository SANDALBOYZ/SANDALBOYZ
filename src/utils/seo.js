import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import shareImage from '@images/shareImage.jpg';

function SEO({ description, lang, meta, image, ogType, slug, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
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
                content: slug
                  ? `${data.site.siteMetadata.siteUrl}${slug}`
                  : `${data.site.siteMetadata.siteUrl}`,
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
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  ogType: 'website',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  ogType: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
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
