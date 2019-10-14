import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import Hero from '@components/Hero';

const LandingPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head title="Home" keywords={['gatsby', 'application', 'react']} />
      <Hero
        href={get(data, 'hero.edges[0].node.fields.slug')}
        image={get(data, 'hero.edges[0].node.frontmatter.hero')}
        label="01 / Featured Story"
        title={get(data, 'hero.edges[0].node.frontmatter.title')}
      />
    </>
  );
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPageQuery {
    hero: allMarkdownRemark(
      filter: { frontmatter: { landingFeatured: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            hero {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
