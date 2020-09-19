import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import get from 'lodash/get';

import Head from '@utils/seo';
import { fadeInEntry } from '@utils/animations';
import FeaturedStory from '@components/FeaturedStory';
import StoriesGrid from '@components/StoriesGrid';

const StoriesPage = ({ data }) => {
  const featured = null;

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
        {Array.isArray(get(data, 'articles.edges')) && (
          <StoriesGrid
            stories={get(data, 'articles.edges', []).map(({ node }) => ({
              id: get(node, 'id'),
              date: get(node, 'createdAt'),
              href: get(node, 'slug'),
              image: get(node, 'heroImage.fluid'),
              lede: get(node, 'previewText.previewText'),
              tags: get(node, 'articleCategories', []),
              title: get(node, 'title'),
            }))}
          />
        )}
      </motion.div>
    </>
  );
};

export default StoriesPage;

export const contentfulTestPageQuery = graphql`
  query ContentfulTestPageQuery {
    articles: allContentfulArticle(sort: {order: DESC, fields: createdAt}) {
      edges {
        node {
          id
          author
          title
          photographer
          slug
          previewText {
            previewText
          }
          createdAt
          heroImage {
            fluid {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
