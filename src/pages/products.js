import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import Header from '@components/Header';
import ProductGrid from '@components/ProductGrid';

const ProductsPage = ({ data }) => (
  <>
    <Head title="Products" />
    <Header label="Fall 2019 Collections" shrinkOnMobile title="All Products" />
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
      title="Collection"
    />
  </>
);

export default ProductsPage;

export const productsPageQuery = graphql`
  query ProductsPageQuery {
    products: allShopifyProduct(sort: { fields: [title], order: DESC }) {
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
  }
`;
