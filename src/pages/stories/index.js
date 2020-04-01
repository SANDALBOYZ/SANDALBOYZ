import React from 'react';
import { graphql, navigate } from 'gatsby';
import { motion } from 'framer-motion';
import get from 'lodash/get';

import Head from '@utils/seo';
import { fadeInEntry } from '@utils/animations';
import FeaturedStory from '@components/FeaturedStory';
import StoriesGrid from '@components/StoriesGrid';

const StoriesPage = ({ data }) => {
  if (!get(data, 'stories.edges.length')) {
    navigate('/');
  }

  let featured = get(data, 'featured');
  if (!featured) {
    featured = get(data, 'stories.edges[0].node');
  }

  return (
    <>
      <Head title="Stories" />
      <motion.div {...fadeInEntry()}>
        {featured && (
          <FeaturedStory
            href={get(featured, 'fields.slug')}
            image={get(featured, 'frontmatter.hero.childImageSharp.fluid')}
            label="Featured Story"
            title={get(featured, 'frontmatter.title')}
          />
        )}
        {Array.isArray(get(data, 'stories.edges')) && (
          <StoriesGrid
            stories={get(data, 'stories.edges', []).map(({ node }) => ({
              id: get(node, 'id'),
              date: get(node, 'frontmatter.date'),
              href: get(node, 'fields.slug'),
              image: get(node, 'frontmatter.hero.childImageSharp.fluid'),
              lede: get(node, 'frontmatter.lede'),
              tags: get(node, 'frontmatter.tags', []),
              title: get(node, 'frontmatter.title'),
            }))}
          />
        )}
      </motion.div>
    </>
  );
};

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
            lede
            tags
            date
            title
          }
        }
      }
    }
  }
`;
