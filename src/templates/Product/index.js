import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import getPrice from '@utils/price';
import Head, { gtag, fbq } from '@utils/seo';
import { Breakpoint, breakpoints, mq } from '@utils/styles';
import { Badge, ContentLabel } from '@utils/type';
import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';

import BaseIcon from '@components/Icon';
import StoreContext from '@context/StoreContext';
import Dropdown from '@components/Dropdown';
import ProductImages from '@components/ProductImages';
import SizeChart from '@components/SizeChart';

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

const Details = styled.div`
  font-family: ${fonts.NIMBUS};
  font-size: 14px;
  line-height: 1.3;
  font-weight: ${weights.LIGHT};
  margin-bottom: ${space[5]};

  & a {
    text-decoration: underline;
  }

  & em {
    font-style: italic;
  }

  & h1 {
    margin-bottom: 20px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 35px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 40px;
    text-transform: uppercase;
  }

  & h2 {
    margin-bottom: 18px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 29px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 32px;
    text-transform: uppercase;
  }

  & h3 {
    margin-bottom: 16px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 24px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 28px;
    text-transform: uppercase;
  }

  & h4 {
    margin-bottom: 12px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 20px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.008em;
    line-height: 24px;
    text-transform: uppercase;
  }

  & h5 {
    margin-bottom: 8px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 16px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.006em;
    line-height: 20px;
    text-transform: uppercase;
  }

  & h6 {
    margin-bottom: 4px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 14px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.003em;
    line-height: 16px;
    text-transform: uppercase;
  }

  & strong {
    font-weight: ${weights.BOLD};
  }

  & p {
    margin: ${space[1]} auto;
    padding: 0;
  }

  & blockquote * {
    max-width: ${space[17]};
    margin: ${space[4]} 0;
    font-family: ${fonts.CONDENSED};
    font-size: 32px;
    font-style: italic;
    font-weight: ${weights.BLACK};
    letter-spacing: 1px;
    line-height: 32px;
    text-transform: uppercase;

    ${mq.gtlg} {
      margin: ${space[6]} ${H_PADDING};
      font-size: 54px;
      line-height: 54px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  ${mq.gtlg} {
    flex-direction: row;
    padding: ${space[4]} ${H_PADDING};
  }
`;

const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

// Title and price
const MobileProductTitle = styled(motion.div)`
  margin-bottom: ${space[3]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    display: none;
  }
`;

// Product description
const ProductInfo = styled(motion.div)`
  align-self: flex-start;
  position: sticky;
  top: calc(80px + 24px);
  height: auto;
  margin: ${space[4]} 0;
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    width: 40%;
    margin-bottom: 0;
    padding: ${space[6]} ${space[7]};
  }
`;

const Selections = styled.div`
  display: none;
  flex-wrap: wrap;
  margin: ${space[1]} 0 ${space[6]};

  & > span {
    display: inline-block;
    flex: 1;

    &:not(:last-of-type) {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[3]};
    width: 100%;
  }

  ${mq.gtmd} {
    align-items: flex-end;
    margin: ${space[5]} 0 ${space[6]};
  }

  ${mq.gtlg} {
    display: flex;
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Sticky bar that holds quantity dropdown/color selection/etc. and buy button
const MobileSelections = styled.div`
  position: sticky;
  bottom: 0;
  width: 100vw;
  margin-bottom: ${space[8]};
  z-index: 8000;
  background-color: ${colors.WINTER_WHITE};
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  flex-wrap: wrap;
  padding: ${space[3]} ${space[5]};
  transition: transform 1.5s ease, opacity 1.5s ease;
  opacity: 1;
  animation: ${slideUp} 1.5s ease;

  & > span {
    display: inline-block;
    flex: 1;

    &:not(:last-of-type) {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[2]};
    width: 100%;
  }

  ${mq.gtlg} {
    animation: none;
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Status = styled.div`
  display: inline-block;
  padding: 0 ${space[1]};
  color: ${colors.N0};
  background-color: ${colors.NEGATIVE};

  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`;

const Sizing = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[5]};
  cursor: pointer;

  & > *:first-child {
    margin-right: ${space[2]};
  }

  & > svg {
    height: 18px;
  }
`;

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
    const { data } = this.props;
    const { sizeShopifyId } = this.state;
    const product = data.shopifyProduct;

    const selectedVariant = product.variants.find(
      (variant) => variant.shopifyId === sizeShopifyId
    );

    // eslint-disable-next-line no-undef
    zE('webWidget', 'hide');

    fbq('track', 'ViewContent', {
      content_name: get(product, 'title'),
      content_type: 'product',
      content_category: get(product, 'productType'),
      content_ids: product.variants.map((variant) => variant.sku),
      value: Number(get(selectedVariant, 'price')),
      currency: 'USD',
    });
  }

  handleAddToCart = () => {
    const { data } = this.props;
    const { color, quantity, sizeShopifyId } = this.state;

    const product = data.shopifyProduct;

    const selectedVariant = product.variants.find(
      (variant) => variant.shopifyId === sizeShopifyId
    );

    gtag('event', 'add_to_cart', {
      items: [
        {
          brand: 'SANDALBOYZ',
          // @TODO: Make category dynamic.
          // category: 'Sandals',
          id: get(selectedVariant, 'sku'),
          item_id: get(selectedVariant, 'sku'),
          name: get(product, 'title'),
          variant: get(selectedVariant, 'title'),
          item_variant: get(selectedVariant, 'title'),
          quantity,
          price: get(selectedVariant, 'price'),
        },
      ],
    });

    fbq('track', 'AddToCart', {
      content_name: get(product, 'title'),
      content_type: 'product',
      content_category: get(product, 'productType'),
      content_ids: [get(selectedVariant, 'sku')],
      value: Number(get(selectedVariant, 'price')),
      currency: 'USD',
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

  handleQuantityChange = (value) => {
    this.setState({ quantity: value });
  };

  handleColorChange = (value) => {
    const onSale = this.getFirstOnSale(value);
    this.setState({ color: value, onSale });
  };

  handleSizeChange = (value) => {
    const onSale = this.getFirstOnSale(value);
    this.setState({ sizeShopifyId: value, onSale });
  };

  getFirstAvailableColor = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return get(
      product.variants
        .filter((variant) =>
          variant.selectedOptions.find((option) => option.name === 'Color')
        )
        .find((variant) => variant.availableForSale),
      'shopifyId'
    );
  };

  getFirstAvailableSize = () => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    return get(
      product.variants
        .filter((variant) =>
          variant.selectedOptions.find((option) => option.name === 'Size')
        )
        .find((variant) => variant.availableForSale),
      'shopifyId'
    );
  };

  getFirstOnSale = (id) => {
    const { data } = this.props;
    const product = data.shopifyProduct;

    const firstAvailable = product.variants.find((variant) => {
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
      .filter((variant) =>
        variant.selectedOptions.find((option) => option.name === 'Color')
      )
      .map((variant) => {
        const color = variant.selectedOptions.find(
          (option) => option.name === 'Color'
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
      .filter((variant) =>
        variant.selectedOptions.find((option) => option.name === 'Size')
      )
      .map((variant) => {
        const size = variant.selectedOptions.find(
          (option) => option.name === 'Size'
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
      productID: get(product, 'handle'),
      // brand: {
      //   '@type': 'Brand',
      //   name: 'SANDALBOYZ',
      // },
      brand: 'SANDALBOYZ',
      image: get(product, 'images', [])[0]?.originalSrc,
      offers: [
        {
          '@type': 'Offer',
          // @TODO: `availability` needs to be dynamic. https://schema.org/OutOfStock
          availability: 'http://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          price: get(product, 'variants[0].price', ''),
          priceCurrency: 'USD',
        },
      ],
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

        <Container>
          <MobileProductTitle {...fadeInRight}>
            <Title>{product.title}</Title>
            {soldOut && (
              <Status>
                <Badge>Sold out</Badge>
              </Status>
            )}
            {!soldOut && onSale && (
              <Status>
                <Badge>Sale</Badge>
              </Status>
            )}
          </MobileProductTitle>
          <ProductImages
            images={product.images}
            videos={get(data, 'contentfulProduct.videos', [])}
          />
          <ProductInfo {...fadeInRight}>
            <Breakpoint min={breakpoints.lg}>
              <Title>{product.title}</Title>
              {soldOut && (
                <Status>
                  <Badge>Sold out</Badge>
                </Status>
              )}
              {!soldOut && onSale && (
                <Status>
                  <Badge>Sale</Badge>
                </Status>
              )}
            </Breakpoint>
            <Selections>
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
            </Selections>

            <afterpay-placement
              data-locale="en_US"
              data-currency="USD"
              data-amount={get(product, 'variants[0].price')}
              data-badge-theme="mint-on-black"
              data-size="xs"
              data-intro-text="Pay in"
            ></afterpay-placement>
            <H2>Details</H2>
            <Details
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <Sizing onClick={this.handleOpenSizeChart}>
              <ContentLabel>View Sizing Chart</ContentLabel>
              <Icon name="clipboard" />
            </Sizing>
          </ProductInfo>
        </Container>

        <MobileSelections>
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
        </MobileSelections>

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
