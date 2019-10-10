import React from 'react';
import { graphql } from 'gatsby';

import Head from '@utils/seo';
import { Container } from '@utils/styles';
import { ProductTitle, ProductDescription } from './styles';

const Product = ({ data }) => {
  const product = data.shopifyProduct;
  return (
    <>
      <Head title={product.title} description={product.description} />
      <Container />
    </>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Product;
