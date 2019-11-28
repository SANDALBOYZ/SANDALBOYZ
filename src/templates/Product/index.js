import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import qs from 'querystringify';

import getPrice from '@utils/price';
import Head from '@utils/seo';
import { Breakpoint, breakpoints } from '@utils/styles';
import { Badge, ContentLabel, H300, H300M, H500 } from '@utils/type';
import StoreContext from '@context/StoreContext';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import Select from '@components/formElements/Select';
import ProductImages from '@components/ProductImages';
import SizeChart from '@components/SizeChart';
import * as styled from './styles';

class Product extends Component {
  static contextType = StoreContext;

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      onSale: this.getFirstSizeOnSale(),
      size: this.getFirstAvailableSize(),
      sizeChartOpen: false,
    };
  }

  handleAddToCart = () => {
    const { data } = this.props;
    const { quantity, size } = this.state;

    const product = data.shopifyProduct;

    let variantId = size;
    if (!variantId) {
      // for products with no size (socks)
      variantId = get(product, 'variants[0].shopifyId');
    }

    this.context.addVariantToCart(variantId, quantity);
  };

  handleCloseSizeChart = () => {
    document.body.classList.remove('scroll-disabled');
    this.setState({ sizeChartOpen: false });
  };

  handleOpenSizeChart = () => {
    document.body.classList.add('scroll-disabled');
    this.setState({ sizeChartOpen: true });
  };

  handleQuantityChange = evt => {
    this.setState({ quantity: evt.target.value });
  };

  handleSizeChange = evt => {
    const onSale = this.getFirstSizeOnSale(evt.target.value);
    this.setState({ size: evt.target.value, onSale });
  };

  getFirstAvailableSize = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return get(
      product.variants
        .filter(variant =>
          variant.selectedOptions.find(option => option.name === 'Size')
        )
        .find(variant => variant.availableForSale),
      'shopifyId'
    );
  };

  getFirstSizeOnSale = (id) => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    const firstAvailable = product.variants
      .filter(variant =>
        variant.selectedOptions.find(option => option.name === 'Size')
      )
      .find(variant => {
        if (id) {
          return variant.shopifyId === id;
        }

        return variant.availableForSale;
      });

    if (firstAvailable) {
      return firstAvailable.compareAtPrice > firstAvailable.price;
    }

    return false;
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

        const optionLabel = variant.availableForSale ? size : `${size} - Sold Out`;

        return {
          name: optionLabel,
          value: variant.shopifyId,
          disabled: !variant.availableForSale,
        };
      });
  };

  render() {
    const { data } = this.props;
    const { quantity, onSale, size, sizeChartOpen } = this.state;

    const product = data.shopifyProduct;
    const sizes = this.getSizes();
    const soldOut = !product.availableForSale;

    return (
      <>
        <Head
          title={product.title}
          description={product.description}
          ogType="product"
          image={get(
            product,
            'images[0].localFile.childImageSharp.fluid.src'
          )}
          meta={[
            {
              property: 'og:price:amount',
              content: get(product, 'variants[0].price'),
            },
            {
              property: 'og:price:amount',
              content: 'USD',
            },
          ]}
          slug={`/products/${product.handle}`}
        />
        <styled.Container>
          <styled.MobileProductInfo>
            <H300M>{product.title}</H300M>
            <H500>{getPrice(get(product, 'variants[0].price'))}</H500>
          </styled.MobileProductInfo>
          <ProductImages images={product.images}>
            {soldOut && (
              <styled.Status>
                <Badge>Sold out</Badge>
              </styled.Status>
            )}
            {!soldOut && onSale && (
              <styled.Status>
                <Badge>Sale</Badge>
              </styled.Status>
            )}
          </ProductImages>
          <styled.ProductInfo>
            <Breakpoint min={breakpoints.lg}>
              <H300>{product.title}</H300>
              <H500>{getPrice(get(product, 'variants[0].price'), get(product, 'variants[0].compareAtPrice'))}</H500>
            </Breakpoint>
            <styled.Selections>
              {sizes.length > 1 && (
                <Select
                  label="Size"
                  name="size"
                  onChange={this.handleSizeChange}
                  options={sizes}
                  value={size}
                />
              )}
              <Input
                label="Quantity"
                min={1}
                max={9}
                name="quantity"
                type="number"
                value={quantity}
                onChange={this.handleQuantityChange}
              />
              <Button size="small" onClick={this.handleAddToCart}>
                Add to bag
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
                href={`https://www.facebook.com/sharer/sharer.php?${qs.stringify(
                  { u: `${get(data, 'site.siteMetadata.siteUrl', 'https://beta.sandalboyz.com')}/products/${product.handle}` }
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="facebook" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?${qs.stringify({
                  url: `${get(data, 'site.siteMetadata.siteUrl', 'https://beta.sandalboyz.com')}/products/${product.handle}`,
                  text: product.title,
                })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="twitter" />
              </a>
              <a
                href={get(product, 'images[0].originalSrc')}
                download={`${product.title}.jpg`}
                title={product.title}
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      availableForSale
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        compareAtPrice
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