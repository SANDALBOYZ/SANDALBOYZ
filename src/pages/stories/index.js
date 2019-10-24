import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import FeaturedStory from '@components/FeaturedStory';
import StoriesGrid from '@components/StoriesGrid';

const StoriesPage = ({ data }) => (
  <>
    <Head title="Stories" />
    <FeaturedStory
      href={get(data, 'featured.fields.slug')}
      image={get(data, 'featured.frontmatter.hero.childImageSharp.fluid')}
      label="Featured Story"
      title={get(data, 'featured.frontmatter.title')}
    />
    <StoriesGrid
      stories={get(data, 'stories.edges', []).map(({ node }) => ({
        id: get(node, 'id'),
        href: get(node, 'fields.slug'),
        image: get(node, 'frontmatter.hero.childImageSharp.fluid'),
        title: get(node, 'frontmatter.title'),
      }))}
    />
  </>
);

export default StoriesPage;

export const storiesPageQuery = graphql`
  query StoriesPageQuery {
    featured: markdownRemark(frontmatter: { storiesFeatured: { eq: true } }) {
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
    stories: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "story" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
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
