import React from 'react';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import { get, isEmpty } from 'lodash';

import Head from '@utils/seo';
import { FullHero } from '@components/Hero';
import ProductGrid from '@components/ProductGrid';
import RecentStories from '@components/RecentStories';
import { fadeInEntry } from '@utils/animations';

function formatNode({ node }) {
  const activeImages = node.images.filter((image) => !isEmpty(image.localFile));

  return {
    id: get(node, 'id'),
    href: `/products/${get(node, 'handle')}`,
    images: [
      get(activeImages, '[0].localFile.childImageSharp.gatsbyImageData'),
      get(activeImages, '[1].localFile.childImageSharp.gatsbyImageData'),
    ],
    price: get(node, 'variants[0].price'),
    compareAtPrice: get(node, 'variants[0].compareAtPrice'),
    title: get(node, 'title'),
    productType: get(node, 'productType'),
    soldOut: !get(node, 'availableForSale'),
    onSale:
      get(node, 'variants[0].compareAtPrice') > get(node, 'variants[0].price'),
  };
}

const LandingPage = ({ data }) => {
  return (
    <>
      <Head title="Home" />

      <motion.div {...fadeInEntry()}>
        <FullHero
          href="/products"
          desktopImage={get(
            data,
            'desktopHero.childImageSharp.gatsbyImageData'
          )}
          mobileImage={get(data, 'mobileHero.childImageSharp.gatsbyImageData')}
          label="Be comfortable with who you are."
          title="SANDALBOYZ"
          callToAction="Shop Now"
        />

        {Array.isArray(get(data, 'recommendedPicks.edges')) &&
          data.recommendedPicks.edges.length > 0 && (
            <ProductGrid
              cta="Shop Now / See More"
              extraPadding={!get(data, 'fullHero')}
              products={data.recommendedPicks.edges.map(formatNode)}
              title="What's New"
              description="The latest and greatest in the world of SANDALBOYZ."
              ctaIcon="arrow-right"
            />
          )}

        {Array.isArray(get(data, 'recentStories.edges')) &&
          data.recentStories.edges.length > 1 && (
            <RecentStories
              storyA={{
                href: `/stories/${data.recentStories.edges[0].node.slug}`,
                image: get(
                  data,
                  'recentStories.edges[0].node.heroImage.gatsbyImageData'
                ),
                title: get(data, 'recentStories.edges[0].node.title'),
                date: get(data, 'recentStories.edges[0].node.publishDate'),
                previewText: get(
                  data,
                  'recentStories.edges[0].node.previewText.previewText'
                ),
              }}
              storyB={{
                href: `/stories/${data.recentStories.edges[1].node.slug}`,
                image: get(
                  data,
                  'recentStories.edges[1].node.heroImage.gatsbyImageData'
                ),
                title: get(data, 'recentStories.edges[1].node.title'),
                date: get(data, 'recentStories.edges[1].node.publishDate'),
                previewText: get(
                  data,
                  'recentStories.edges[1].node.previewText.previewText'
                ),
              }}
            />
          )}
      </motion.div>
    </>
  );
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPageQuery {
    desktopHero: file(relativePath: { eq: "DSC08728-desktop_hero.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
    mobileHero: file(relativePath: { eq: "DSC08732-MOBILE_hero.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
    recommendedPicks: allShopifyProduct(
      filter: { tags: { in: "featured:primary" } }
      limit: 8
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          availableForSale
          title
          productType
          handle
          createdAt
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                gatsbyImageData
                fluid(maxWidth: 360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          variants {
            price
            compareAtPrice
          }
        }
      }
    }
    recentStories: allContentfulArticle(
      sort: { order: DESC, fields: publishDate }
      limit: 2
    ) {
      edges {
        node {
          id
          slug
          title
          publishDate
          previewText {
            previewText
          }
          heroImage {
            gatsbyImageData
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
