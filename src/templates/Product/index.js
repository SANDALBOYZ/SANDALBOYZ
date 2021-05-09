import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import getPrice from '@utils/price';
import Head, { gtag } from '@utils/seo';
import { Breakpoint, breakpoints } from '@utils/styles';
import { Badge, ContentLabel } from '@utils/type';
import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import StoreContext from '@context/StoreContext';
import Dropdown from '@components/Dropdown';
import ProductImages from '@components/ProductImages';
import SizeChart from '@components/SizeChart';

import * as oldStyled from './styles';

const fadeInRight = {
  initial: { opacity: 0, x: '10px' },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.19, 1, 0.22, 1],
      duration: 3,
      delay: 1,
    },
  },
};

const Title = styled.h1`
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.REGULAR};
  font-size: 20px;
`;

const Button = styled.button`
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.LIGHT};
  font-size: 14px;
  text-transform: uppercase;
  background-color: #333;
  color: ${colors.LIGHT_GRAY};
  height: 50px;
  border: 0;
  cursor: pointer;
`;

const H2 = styled.h2`
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.LIGHT};
  font-size: 12px;
  text-transform: uppercase;
`;

class Product extends Component {
  static contextType = StoreContext;

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      onSale: this.getFirstOnSale(),
      color: this.getFirstAvailableColor(),
      sizeShopifyId: this.getFirstAvailableSize(), // Looks like "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTcyMzQ4MzIzNDQwMA=="
      sizeChartOpen: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    zE('webWidget', 'hide');
  }

  handleAddToCart = () => {
    const { data } = this.props;
    const { color, quantity, sizeShopifyId } = this.state;

    const product = data.shopifyProduct;

    const selectedVariant = product.variants.find(
      variant => variant.shopifyId === sizeShopifyId
    );

    gtag('event', 'add_to_cart', {
      items: [
        {
          brand: 'SANDALBOYZ',
          // @TODO: Make category dynamic.
          // category: 'Sandals',
          id: get(selectedVariant, 'sku'),
          name: get(product, 'title'),
          variant: get(selectedVariant, 'title'),
          quantity,
          price: get(selectedVariant, 'price'),
        },
      ],
    });

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
    this.setState({ sizeShopifyId: value, onSale });
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
    const {
      quantity,
      onSale,
      color,
      sizeShopifyId,
      sizeChartOpen,
    } = this.state;

    const product = data.shopifyProduct;
    const sizes = this.getSizes();
    const productColors = this.getColors();
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

    const price = getPrice(
      get(product, 'variants[0].price'),
      get(product, 'variants[0].compareAtPrice')
    );

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

        <oldStyled.Container>
          <oldStyled.MobileProductTitle {...fadeInRight}>
            <Title>{product.title}</Title>
            {soldOut && (
              <oldStyled.Status>
                <Badge>Sold out</Badge>
              </oldStyled.Status>
            )}
            {!soldOut && onSale && (
              <oldStyled.Status>
                <Badge>Sale</Badge>
              </oldStyled.Status>
            )}
          </oldStyled.MobileProductTitle>
          <ProductImages
            images={product.images}
            videos={get(data, 'contentfulProduct.videos', [])}
          />
          <oldStyled.ProductInfo {...fadeInRight}>
            <Breakpoint min={breakpoints.lg}>
              <Title>{product.title}</Title>
              {soldOut && (
                <oldStyled.Status>
                  <Badge>Sold out</Badge>
                </oldStyled.Status>
              )}
              {!soldOut && onSale && (
                <oldStyled.Status>
                  <Badge>Sale</Badge>
                </oldStyled.Status>
              )}
            </Breakpoint>
            <oldStyled.Selections>
              {sizes.length > 1 && (
                <span>
                  <Dropdown
                    onChange={this.handleSizeChange}
                    options={sizes}
                    value={sizeShopifyId}
                    placeholder="Size"
                    prefix="Size"
                  />
                </span>
              )}
              {productColors.length > 1 && (
                <span>
                  <Dropdown
                    onChange={this.handleColorChange}
                    options={productColors}
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
                  prefix="Quantity"
                />
              </span>
              <Button
                size="small"
                onClick={this.handleAddToCart}
                disabled={soldOut}
              >
                Add to bag — {price}
              </Button>
            </oldStyled.Selections>

            <afterpay-placement
              data-locale="en_US"
              data-currency="USD"
              data-amount={get(product, 'variants[0].price')}
              data-badge-theme="mint-on-black"
              data-size="xs"
              data-intro-text="Pay in"
            ></afterpay-placement>
            <H2>Details</H2>
            <oldStyled.Details
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <oldStyled.Sizing onClick={this.handleOpenSizeChart}>
              <ContentLabel>View Sizing Chart</ContentLabel>
              <oldStyled.Icon name="clipboard" />
            </oldStyled.Sizing>
          </oldStyled.ProductInfo>
        </oldStyled.Container>

        <oldStyled.MobileSelections>
          {sizes.length > 1 && (
            <span>
              <Dropdown
                dropUp
                onChange={this.handleSizeChange}
                options={sizes}
                value={sizeShopifyId}
                placeholder="Size"
                prefix="Size"
              />
            </span>
          )}
          {productColors.length > 1 && (
            <span>
              <Dropdown
                dropUp
                onChange={this.handleColorChange}
                options={productColors}
                value={color}
                placeholder="Color"
              />
            </span>
          )}
          <span>
            <Dropdown
              dropUp
              onChange={this.handleQuantityChange}
              options={[...Array(10)].map((_, idx) => ({
                name: `${idx + 1}`,
                value: idx + 1,
              }))}
              value={quantity}
              prefix="Quantity"
            />
          </span>
          <Button
            size="small"
            onClick={this.handleAddToCart}
            disabled={soldOut}
          >
            Add to bag — {price}
          </Button>
        </oldStyled.MobileSelections>

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
            gatsbyImageData
            fluid(maxWidth: 1080, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    contentfulProduct(handle: { eq: $handle }) {
      videos {
        id
        description
        file {
          url
        }
      }
    }
  }
`;

export default Product;
