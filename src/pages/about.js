import React from 'react';
import { graphql } from 'gatsby';
import About from '@components/About';
import get from 'lodash/get';

const AboutPage = ({ data }) => {
  console.log(data);

  return (
    <About
      title={get(data, 'aboutPage.edges[0].node.title')}
      description={get(data, 'aboutPage.edges[0].node.description.json')}
      sections={get(data, 'aboutPageSections.edges')}
    />
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    aboutPage: allContentfulAboutPage(limit: 1) {
      edges {
        node {
          description {
            content {
              content {
                nodeType
                value
              }
              nodeType
            }
            json
          }
          title
        }
      }
    }
    aboutPageSections: allContentfulAboutPageSection {
      edges {
        node {
          header
          description {
            content {
              content {
                nodeType
                value
              }
              nodeType
            }
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
