import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import About from '@components/About';

const AboutPage = ({ data }) => {
  return (
    <>
      <Head
        title="About Us"
        description={get(
          data,
          'aboutPage.edges[0].node.descriptionPlainText.descriptionPlainText'
        )}
        // schemaType="AboutPage" // https://schema.org/AboutPage
      />
      <About
        title={get(data, 'aboutPage.edges[0].node.title')}
        description={get(data, 'aboutPage.edges[0].node.description.json')}
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
            json
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
            json
          }
          subSections {
            title
            description {
              json
            }
            image {
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
