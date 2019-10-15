import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import getPrice from '@utils/price';
import Head from '@utils/seo';
import { ContentLabel, H300, H500 } from '@utils/type';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import Select from '@components/formElements/Select';
import ProductImages from '@components/ProductImages';
import SizeChart from '@components/SizeChart';
import * as styled from './styles';

class Product extends Component {
  state = {
    sizeChartOpen: false,
  };

  handleCloseSizeChart = () => {
    this.setState({ sizeChartOpen: false });
  };

  handleOpenSizeChart = () => {
    this.setState({ sizeChartOpen: true });
  };

  getSizes = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return product.variants
      .filter(variant =>
        variant.selectedOptions.find(option => option.name === 'Size')
      )
      .map(variant => {
        const size = variant.selectedOptions.find(
          option => option.name === 'Size'
        ).value;

        return {
          name: size,
          value: size,
          disabled: variant.availableForSale,
        };
      });
  };

  render() {
    const { data } = this.props;
    const { sizeChartOpen } = this.state;

    const product = data.shopifyProduct;

    return (
      <>
        <Head title={product.title} description={product.description} />
        <styled.Container>
          <ProductImages images={product.images} />
          <styled.ProductInfo>
            <H300>{product.title}</H300>
            <H500>{getPrice(get(product, 'variants[0].price'))}</H500>
            <styled.Selections>
              <Select label="Size" name="size" options={this.getSizes()} />
              <Input
                defaultValue={1}
                label="Quantity"
                min={1}
                max={9}
                name="quantity"
                type="number"
              />
              <Button size="small" type="submit">
                Add to cart
              </Button>
            </styled.Selections>
            <styled.H600>Product Details</styled.H600>
            <styled.Body>{product.description}</styled.Body>
            <styled.Sizing onClick={this.handleOpenSizeChart}>
              <ContentLabel>View Sizing Chart</ContentLabel>
              <styled.Icon name="clipboard" />
            </styled.Sizing>
            <styled.Social>
              <a
                href="https://facebook.com/sandalboyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="facebook" />
              </a>
              <a
                href="https://twitter.com/sandalboyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="twitter" />
              </a>
              <a
                href="https://instagram.com/sandalboyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="instagram" />
              </a>
            </styled.Social>
          </styled.ProductInfo>
        </styled.Container>
        <SizeChart open={sizeChartOpen} onClose={this.handleCloseSizeChart} />
      </>
    );
  }
}

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
