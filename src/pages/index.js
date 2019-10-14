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
      <Head title="Home" keywords={['gatsby', 'application', 'react']} />
      <Hero
        href={get(data, 'hero.fields.slug')}
        image={get(data, 'hero.frontmatter.hero')}
        label="01 / Featured Story"
        title={get(data, 'hero.frontmatter.title')}
      />
      <ProductGrid
        products={
          Array.isArray(get(data, 'products.edges')) &&
          data.products.edges.map(({ node }) => ({
            id: get(node, 'id'),
            href: `/products/${get(node, 'handle')}`,
            image: get(node, 'images[0].localFile.childImageSharp.fluid.src'),
            price: get(node, 'variants[0].price'),
            title: get(node, 'title'),
          }))
        }
        title="02 / Chroma Collection"
      />
      {Array.isArray(get(data, 'recentStories.edges')) &&
        data.recentStories.edges.length > 1 && (
          <RecentStories
            storyA={{
              href: get(data, 'recentStories.edges[0].node.fields.slug'),
              image: get(
                data,
                'recentStories.edges[0].node.frontmatter.hero.childImageSharp.fluid.src'
              ),
              title: get(data, 'recentStories.edges[0].node.frontmatter.title'),
            }}
            storyB={{
              href: get(data, 'recentStories.edges[1].node.fields.slug'),
              image: get(
                data,
                'recentStories.edges[1].node.frontmatter.hero.childImageSharp.fluid.src'
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
        image={get(data, 'teaser.frontmatter.hero')}
        label="04 / Featured Story"
        title={get(data, 'teaser.frontmatter.title')}
      />
      <ProductGrid
        products={
          Array.isArray(get(data, 'products.edges')) &&
          data.products.edges.map(({ node }) => ({
            id: get(node, 'id'),
            href: `/products/${get(node, 'handle')}`,
            image: get(node, 'images[0].localFile.childImageSharp.fluid.src'),
            price: get(node, 'variants[0].price'),
            title: get(node, 'title'),
          }))
        }
        title="05 / Monogram Collection"
      />
    </>
  );
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPageQuery {
    hero: markdownRemark(frontmatter: {landingFeatured: {eq: true}}) {
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
    products: allShopifyProduct(
      limit: 6
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          handle
          createdAt
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
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
      filter: { frontmatter: { title: { nin: "" } } }
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
    teaser: markdownRemark(frontmatter: {blogFeatured: {eq: true}}) {
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
