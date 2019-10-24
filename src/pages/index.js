import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import BannerLight from '@components/BannerLight';
import Hero from '@components/Hero';
import ProductGrid from '@components/ProductGrid';
import RecentStories from '@components/RecentStories';

const LandingPage = ({ data }) => {
  return (
    <>
      <Head title="Home" />
      <Hero
        href={get(data, 'hero.fields.slug')}
        image={get(data, 'hero.frontmatter.hero.childImageSharp.fluid')}
        label="01 / Featured Story"
        title={get(data, 'hero.frontmatter.title')}
      />
      <ProductGrid
        products={
          Array.isArray(get(data, 'inline.edges')) &&
          data.inline.edges.map(({ node }) => ({
            id: get(node, 'id'),
            href: `/products/${get(node, 'handle')}`,
            images: [
              get(node, 'images[0].localFile.childImageSharp.fluid'),
              get(node, 'images[1].localFile.childImageSharp.fluid'),
            ],
            price: get(node, 'variants[0].price'),
            title: get(node, 'title'),
            soldOut: !get(node, 'availableForSale'),
          }))
        }
        title="02 / Inline Collection"
      />
      {Array.isArray(get(data, 'recentStories.edges')) &&
        data.recentStories.edges.length > 1 && (
          <RecentStories
            storyA={{
              href: get(data, 'recentStories.edges[0].node.fields.slug'),
              image: get(
                data,
                'recentStories.edges[0].node.frontmatter.hero.childImageSharp.fluid'
              ),
              title: get(data, 'recentStories.edges[0].node.frontmatter.title'),
            }}
            storyB={{
              href: get(data, 'recentStories.edges[1].node.fields.slug'),
              image: get(
                data,
                'recentStories.edges[1].node.frontmatter.hero.childImageSharp.fluid'
              ),
              title: get(data, 'recentStories.edges[1].node.frontmatter.title'),
            }}
          />
        )}
      <BannerLight
        cta={{
          href: get(data, 'teaser.fields.slug'),
          name: 'View blog',
        }}
        image={get(data, 'teaser.frontmatter.hero.childImageSharp.fluid')}
        label="04 / Featured Story"
        title={get(data, 'teaser.frontmatter.title')}
      />
      <ProductGrid
        products={
          Array.isArray(get(data, 'specialProjects.edges')) &&
          data.specialProjects.edges.map(({ node }) => ({
            id: get(node, 'id'),
            href: `/products/${get(node, 'handle')}`,
            images: [
              get(node, 'images[0].localFile.childImageSharp.fluid'),
              get(node, 'images[1].localFile.childImageSharp.fluid'),
            ],
            price: get(node, 'variants[0].price'),
            title: get(node, 'title'),
            soldOut: !get(node, 'availableForSale'),
          }))
        }
        title="05 / Special Projects"
      />
    </>
  );
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPageQuery {
    hero: markdownRemark(frontmatter: { landingFeatured: { eq: true } }) {
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
    inline: allShopifyProduct(
      filter: { tags: { in: "collection:Inline" } }
      limit: 6
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
          }
        }
      }
    }
    specialProjects: allShopifyProduct(
      filter: { tags: { in: "collection:Special Projects" } }
      limit: 6
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
          }
        }
      }
    }
    recentStories: allMarkdownRemark(
      filter: {
        frontmatter: { title: { nin: "" }, templateKey: { eq: "story" } }
      }
      limit: 2
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
    teaser: markdownRemark(frontmatter: { storiesFeatured: { eq: true } }) {
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
`;
