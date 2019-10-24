import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import qs from 'querystringify';

import getPrice from '@utils/price';
import Head from '@utils/seo';
import { Breakpoint, breakpoints } from '@utils/styles';
import { ContentLabel, H300, H300M, H500 } from '@utils/type';
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
    this.setState({ size: evt.target.value });
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
          value: variant.shopifyId,
          disabled: !variant.availableForSale,
        };
      });
  };

  render() {
    const { data } = this.props;
    const { quantity, size, sizeChartOpen } = this.state;

    const product = data.shopifyProduct;
    const sizes = this.getSizes();

    return (
      <>
        <Head
          title={product.title}
          description={product.description}
          ogType="product"
          meta={[
            {
              property: 'twitter:image',
              content: get(
                product,
                'images[0].localFile.childImageSharp.fluid.src'
              ),
            },
            {
              property: 'og:image',
              content: get(
                product,
                'images[0].localFile.childImageSharp.fluid.src'
              ),
            },
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
          <ProductImages images={product.images} />
          <styled.ProductInfo>
            <Breakpoint min={breakpoints.lg}>
              <H300>{product.title}</H300>
              <H500>{getPrice(get(product, 'variants[0].price'))}</H500>
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
                  { u: `https://pedantic-kepler-2981ce.netlify.com/products/${product.handle}` }
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="facebook" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?${qs.stringify({
                  url: `https://pedantic-kepler-2981ce.netlify.com/${product.handle}`,
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
