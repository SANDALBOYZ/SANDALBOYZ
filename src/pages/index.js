import React from 'react';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
// import BannerLight from '@components/BannerLight';
import { FullHero } from '@components/Hero';
import ProductGrid from '@components/ProductGrid';
import RecentStories from '@components/RecentStories';
import { fadeInEntry } from '@utils/animations';

const LandingPage = ({ data }) => {
  return (
    <>
      <Head title="Home" />

      <motion.div {...fadeInEntry()}>
        {get(data, 'fullHero') && (
          <FullHero
            href="/products"
            desktopImage={get(
              data,
              'fullHero.frontmatter.desktopImage.childImageSharp.fluid'
            )}
            mobileImage={get(
              data,
              'fullHero.frontmatter.mobileImage.childImageSharp.fluid'
            )}
            label={get(data, 'fullHero.frontmatter.label')}
            title={get(data, 'fullHero.frontmatter.title')}
            callToAction={get(data, 'fullHero.frontmatter.callToAction')}
          />
        )}

        {Array.isArray(get(data, 'recommendedPicks.edges')) &&
          data.recommendedPicks.edges.length > 0 && (
            <ProductGrid
              cta="Shop Now / See More"
              extraPadding={!get(data, 'fullHero')}
              products={data.recommendedPicks.edges.map(({ node }) => ({
                id: get(node, 'id'),
                href: `/products/${get(node, 'handle')}`,
                images: [
                  get(node, 'images[0].localFile.childImageSharp.fluid'),
                  get(node, 'images[1].localFile.childImageSharp.fluid'),
                ],
                price: get(node, 'variants[0].price'),
                compareAtPrice: get(node, 'variants[0].compareAtPrice'),
                title: get(node, 'title'),
                soldOut: !get(node, 'availableForSale'),
                onSale:
                  get(node, 'variants[0].compareAtPrice') >
                  get(node, 'variants[0].price'),
              }))}
              title="What's Hot"
              titleIcon="arrow-right"
            />
          )}

        {Array.isArray(get(data, 'recentStories.edges')) &&
          data.recentStories.edges.length > 1 && (
            <RecentStories
              storyA={{
                href: `/stories/${data.recentStories.edges[0].node.slug}`,
                image: get(data, 'recentStories.edges[0].node.heroImage.fluid'),
                title: get(data, 'recentStories.edges[0].node.title'),
                date: get(data, 'recentStories.edges[0].node.publishDate'),
                previewText: get(
                  data,
                  'recentStories.edges[0].node.previewText.previewText'
                ),
              }}
              storyB={{
                href: `/stories/${data.recentStories.edges[1].node.slug}`,
                image: get(data, 'recentStories.edges[1].node.heroImage.fluid'),
                title: get(data, 'recentStories.edges[1].node.title'),
                date: get(data, 'recentStories.edges[1].node.publishDate'),
                previewText: get(
                  data,
                  'recentStories.edges[1].node.previewText.previewText'
                ),
              }}
            />
          )}
        {/* {get(data, 'teaser') && (
        <BannerLight
          cta={{
            href: get(data, 'teaser.fields.slug'),
            name: 'View blog',
          }}
          image={get(data, 'teaser.frontmatter.hero.childImageSharp.fluid')}
          label="Featured Story"
          title={get(data, 'teaser.frontmatter.title')}
        />
      )}
      {Array.isArray(get(data, 'recentProducts.edges')) &&
        data.recentProducts.edges.length > 0 && (
          <ProductGrid
            cta="Shop Now / See More"
            products={data.recentProducts.edges.map(({ node }) => ({
              id: get(node, 'id'),
              href: `/products/${get(node, 'handle')}`,
              images: [
                get(node, 'images[0].localFile.childImageSharp.fluid'),
                get(node, 'images[1].localFile.childImageSharp.fluid'),
              ],
              price: get(node, 'variants[0].price'),
              compareAtPrice: get(node, 'variants[0].compareAtPrice'),
              title: get(node, 'title'),
              soldOut: !get(node, 'availableForSale'),
              onSale:
                get(node, 'variants[0].compareAtPrice') >
                get(node, 'variants[0].price'),
            }))}
            title="Recent Products"
            titleIcon="arrow-right"
          />
        )} */}
      </motion.div>
    </>
  );
};

export default LandingPage;

// REMOVED QUERIES BELOW. LEAVING HERE JUST IN CASE I NEED THEM BACK LATER! - Ryan
//
// hero: markdownRemark(frontmatter: { landingFeatured: { eq: true } }) {
//   fields {
//     slug
//   }
//   frontmatter {
//     hero {
//       childImageSharp {
//         fluid(maxWidth: 2048, quality: 90) {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//     title
//   }
// }
// recentProducts: allShopifyProduct(
//   filter: { tags: { in: "featured:secondary" } }
//       limit: 6
//       sort: { fields: [createdAt], order: DESC }
// ) {
//   edges {
//     node {
//       id
//       availableForSale
//       title
//       handle
//       createdAt
//       images {
//         id
//         originalSrc
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 360) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       variants {
//         price
//         compareAtPrice
//       }
//     }
//   }
// }
// teaser: markdownRemark(frontmatter: { storiesFeatured: { eq: true } }) {
//   fields {
//     slug
//   }
//   frontmatter {
//     hero {
//       childImageSharp {
//         fluid(maxWidth: 2048, quality: 90) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     title
//   }
// }

export const landingPageQuery = graphql`
  query LandingPageQuery {
    fullHero: markdownRemark(frontmatter: { templateKey: { eq: "fullHero" } }) {
      id
      frontmatter {
        desktopImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        mobileImage {
          childImageSharp {
            fluid(maxWidth: 768, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        label
        title
        callToAction
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
          handle
          createdAt
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
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
