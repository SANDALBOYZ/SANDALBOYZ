import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import About from '@components/About';
import logo from '@images/logo.jpg';

const AboutPage = ({ data }) => {
  const additionalSchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://www.sandalboyz.com',
    logo: logo,
  };

  return (
    <>
      <Head
        title="About Us"
        description={get(
          data,
          'aboutPage.edges[0].node.descriptionPlainText.descriptionPlainText'
        )}
        additionalSchemaOrg={additionalSchemaOrg}
      />
      <About
        title={get(data, 'aboutPage.edges[0].node.title')}
        description={get(data, 'aboutPage.edges[0].node.description.raw')}
        sections={get(data, 'aboutPageSections.edges')}
      />
    </>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    aboutPage: allContentfulAboutPage(limit: 1) {
      edges {
        node {
          description {
            raw
          }
          title
          descriptionPlainText {
            descriptionPlainText
          }
        }
      }
    }
    aboutPageSections: allContentfulAboutPageSection {
      edges {
        node {
          header
          description {
            raw
          }
          subSections {
            title
            description {
              raw
            }
            image {
              gatsbyImageData
              fluid {
                src
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`;
