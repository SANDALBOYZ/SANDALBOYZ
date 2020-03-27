import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
// import qs from 'querystringify';
import remark from 'remark';
import html from 'remark-html';

import getPrice from '@utils/price';
import Head from '@utils/seo';
import { Breakpoint, breakpoints } from '@utils/styles';
import { Badge, ContentLabel, H300, H300M, H500 } from '@utils/type';
import StoreContext from '@context/StoreContext';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Input from '@components/formElements/Input';
import ProductImages from '@components/ProductImages';
import SizeChart from '@components/SizeChart';
import * as styled from './styles';

class Product extends Component {
  static contextType = StoreContext;

  constructor(props) {
    super(props);

    // @TODO: State handling needs to be reconsidered to add SKUs which are necessary for `gtag`.
    this.state = {
      quantity: 1,
      onSale: this.getFirstOnSale(),
      color: this.getFirstAvailableColor(),
      sizeShopifyId: this.getFirstAvailableSize(), // Looks like "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTcyMzQ4MzIzNDQwMA=="
      sizeChartOpen: false,
    };
  }

  handleAddToCart = () => {
    const { data } = this.props;
    const { color, quantity, sizeShopifyId } = this.state;

    const product = data.shopifyProduct;

    const selectedVariant = product.variants.find(variant => variant.shopifyId === sizeShopifyId);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'add_to_cart', {
        items: [
          {
            brand: 'SANDALBOYZ',
            // @TODO: Make category dynamic.
            // category: 'Sandals',
            id: selectedVariant.sku,
            name: get(product, 'title'),
            variant: selectedVariant.title,
            quantity,
            price: selectedVariant.price,
          },
        ],
      });
    }

    let variantId = sizeShopifyId || color;
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

  handleQuantityChange = value => {
    this.setState({ quantity: value });
  };

  handleColorChange = value => {
    const onSale = this.getFirstOnSale(value);
    this.setState({ color: value, onSale });
  };

  handleSizeChange = value => {
    const onSale = this.getFirstOnSale(value);
    this.setState({ size: value, onSale });
  };

  getFirstAvailableColor = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return get(
      product.variants
        .filter(variant =>
          variant.selectedOptions.find(option => option.name === 'Color')
        )
        .find(variant => variant.availableForSale),
      'shopifyId'
    );
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

  getFirstOnSale = id => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    const firstAvailable = product.variants.find(variant => {
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

  getColors = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return product.variants
      .filter(variant =>
        variant.selectedOptions.find(option => option.name === 'Color')
      )
      .map(variant => {
        const color = variant.selectedOptions.find(
          option => option.name === 'Color'
        ).value;

        const optionLabel = variant.availableForSale
          ? color
          : `${color} - Sold Out`;

        return {
          name: optionLabel,
          value: variant.shopifyId,
          disabled: !variant.availableForSale,
        };
      });
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

        const optionLabel = variant.availableForSale
          ? size
          : `${size} - Sold Out`;

        return {
          name: optionLabel,
          value: variant.shopifyId,
          disabled: !variant.availableForSale,
        };
      });
  };

  render() {
    const { data } = this.props;
    const { quantity, onSale, color, sizeShopifyId, sizeChartOpen } = this.state;

    const product = data.shopifyProduct;
    const sizes = this.getSizes();
    const colors = this.getColors();
    const soldOut = !product.availableForSale;

    // https://developers.google.com/search/docs/data-types/product
    const schemaOrg = {
      brand: {
        '@type': 'Brand',
        name: 'SANDALBOYZ',
      },
      image: get(product, 'images', []).map(image => image.originalSrc),
      offers: {
        '@type': 'Offer',
        // @TODO: `availability` needs to be dynamic. https://schema.org/OutOfStock
        availability: 'http://schema.org/InStock',
        price: get(product, 'variants[0].price', ''),
        priceCurrency: 'USD',
      },
    };

    const gtagData = {
      eventType: 'view_item',
      payload: {
        items: [
          {
            name: get(product, 'title'),
            brand: 'SANDALBOYZ',
            category: 'Sandals',
          },
        ],
      },
    };

    return (
      <>
        <Head
          title={product.title}
          description={product.description}
          schemaType="Product" // https://schema.org/Product
          image={get(product, 'images[0].localFile.childImageSharp.fluid.src')}
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
          additionalSchemaOrg={schemaOrg}
          gtagData={gtagData}
        />

        <styled.Container>
          <styled.MobileProductTitle>
            <H300M>{product.title}</H300M>
            <H500>{getPrice(get(product, 'variants[0].price'))}</H500>
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
          </styled.MobileProductTitle>
          <ProductImages images={product.images} />
          <styled.ProductInfo>
            <Breakpoint min={breakpoints.lg}>
              <H300>{product.title}</H300>
              <H500>
                {getPrice(
                  get(product, 'variants[0].price'),
                  get(product, 'variants[0].compareAtPrice')
                )}
              </H500>
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
            </Breakpoint>
            <styled.Selections>
              {sizes.length > 1 && (
                <span>
                  <Dropdown
                    onChange={this.handleSizeChange}
                    options={sizes}
                    value={sizeShopifyId}
                    placeholder="Size"
                    prefix="Size:"
                  />
                </span>
              )}
              {colors.length > 1 && (
                <span>
                  <Dropdown
                    onChange={this.handleColorChange}
                    options={colors}
                    value={color}
                    placeholder="Color"
                  />
                </span>
              )}
              <span>
                <Dropdown
                  onChange={this.handleQuantityChange}
                  options={[...Array(10)].map((_, idx) => ({
                    name: `${idx + 1}`,
                    value: idx + 1,
                  }))}
                  value={quantity}
                  prefix="Quantity:"
                />
              </span>
              <Button
                size="small"
                onClick={this.handleAddToCart}
                disabled={soldOut}
              >
                Add to bag
              </Button>
            </styled.Selections>

            <styled.H600>Product Details</styled.H600>
            <styled.Body
              dangerouslySetInnerHTML={{
                __html: remark()
                  .use(html)
                  .processSync(product.descriptionHtml)
                  .toString(),
              }}
            />
            <styled.Sizing onClick={this.handleOpenSizeChart}>
              <ContentLabel>View Sizing Chart</ContentLabel>
              <styled.Icon name="clipboard" />
            </styled.Sizing>

            {/* <styled.Social>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?${qs.stringify(
                  {
                    u: `${get(
                      data,
                      'site.siteMetadata.siteUrl'
                    )}/products/${product.handle}`,
                  }
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <styled.Icon name="facebook" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?${qs.stringify({
                  url: `${get(
                    data,
                    'site.siteMetadata.siteUrl'
                  )}/products/${product.handle}`,
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
            </styled.Social> */}
          </styled.ProductInfo>
        </styled.Container>

        <styled.MobileSelections>
          <styled.MobileSelectionsTitleContainer>
            <H300M>{product.title}</H300M>
            <H500>
              {getPrice(
                get(product, 'variants[0].price'),
                get(product, 'variants[0].compareAtPrice')
              )}
            </H500>
          </styled.MobileSelectionsTitleContainer>
          {sizes.length > 1 && (
            <span>
              <Dropdown
                dropUp
                onChange={this.handleSizeChange}
                options={sizes}
                value={sizeShopifyId}
                placeholder="Size"
                prefix="Size:"
              />
            </span>
          )}
          {colors.length > 1 && (
            <span>
              <Dropdown
                dropUp
                onChange={this.handleColorChange}
                options={colors}
                value={color}
                placeholder="Color"
              />
            </span>
          )}
          <span>
            <Input
              min={1}
              max={9}
              name="quantity"
              type="number"
              value={quantity}
              onChange={this.handleQuantityChange}
              prefix="Pairs:"
            />
          </span>
          <Button
            size="small"
            onClick={this.handleAddToCart}
            disabled={soldOut}
          >
            Add to bag
          </Button>
        </styled.MobileSelections>

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
        sku
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
