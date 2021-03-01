import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css, keyframes } from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { fonts, weights } from '@utils/fonts';

import ProductTile from '@components/ProductTile';
import BaseIcon from '@components/Icon';

export const ClearFilter = styled.button`
  background: transparent;
  border: 0;
  appearance: none;
  margin-left: ${space[0]};
  padding: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  outline: 0;

  &:hover {
    background-color: ${colors.N800};
  }
`;

export const Container = styled(BaseContainer)`
  padding: 0;

  ${mq.gtmd} {
    padding: 0 ${H_PADDING_MOBILE};
  }

  ${mq.gtlg} {
    padding: 0 ${H_PADDING};
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-right: ${space[2]};
  margin-bottom: ${space[2]};
  padding: 0 0 0 8px;
  color: ${colors.N0};
  background-color: ${colors.N700};
  white-space: nowrap;

  ${mq.gtmd} {
    margin-bottom: 0;
  }
`;

const leftRight = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(6px);
  }

  100% {
    transform: translateX(0);
  }
`;

export const Header = styled.div`
  padding: 0 ${H_PADDING_MOBILE} ${space[2]};

  ${mq.gtmd} {
    padding: 0;
  }
`;

const M_AUTO_GRID_MIN_SIZE = '20rem';
const D_AUTO_GRID_MIN_SIZE = '22rem';

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${M_AUTO_GRID_MIN_SIZE}, 1fr)
  );
  grid-row-gap: ${space[2]};

  ${mq.gtmd} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${D_AUTO_GRID_MIN_SIZE}, 1fr)
    );
    grid-gap: ${space[2]};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductGridWrapper = styled.div`
  margin-bottom: ${space[8]};
  ${props =>
    props.extraPadding &&
    css`
      padding-top: 48px;
    `}

  ${mq.gtlg} {
    margin-top: ${space[2]};

    ${props =>
      props.extraPadding &&
      css`
        padding-top: 80px;
      `}
  }
`;

const TitleContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;

  ${mq.gtmd} {
    margin-top: 100px;
  }
`;

const H1 = styled.h1`
  font-family: ${fonts.GRANVILLE};
  font-size: 1.5rem;
  font-weight: ${weights.REGULAR};
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-family: ${fonts.NIMBUS};
  font-size: 0.8rem;
  font-weight: ${weights.LIGHT};
  line-height: 1.1rem;
  width: 80%;
  margin-bottom: 10px;
`;

const CallToAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.REGULAR};
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover svg {
    animation: ${leftRight} 1s ease-out infinite;
  }
`;

export const CtaIcon = styled(BaseIcon)`
  height: 12px;
  vertical-align: middle;
  margin-left: 5px;

  &:hover {
    animation: ${leftRight} 1s ease-out infinite;
  }
`;

const ProductGrid = ({
  cta,
  filters,
  extraPadding,
  onFilter,
  products,
  title,
  description,
  ctaIcon,
}) => {
  const clearFilter = (key, filter) => {
    const newFilters = { collection: [], productType: [] };

    Object.keys(filters).forEach(key => {
      newFilters[key] = filters[key].filter(f => f !== filter);
    });

    onFilter(newFilters);
  };

  return (
    <ProductGridWrapper extraPadding={extraPadding}>
      <Container>
        <Header>
          <TitleContainer>
            <H1>{title}</H1>
            <Description>{description}</Description>
            {cta && (
              <CallToAction to="/products">
                {cta} {ctaIcon && <CtaIcon name={ctaIcon} />}
              </CallToAction>
            )}
          </TitleContainer>
          {filters &&
            Object.keys(filters).map(key =>
              filters[key].map(filter => (
                <Filter key={filter}>
                  {filter}
                  <ClearFilter
                    onClick={() => {
                      clearFilter(key, filter);
                    }}
                  >
                    <CtaIcon name="x" />
                  </ClearFilter>
                </Filter>
              ))
            )}
        </Header>
        <Products>
          {products.map(product => (
            <ProductTile key={product.id} {...product} />
          ))}
        </Products>
      </Container>
    </ProductGridWrapper>
  );
};

ProductGrid.propTypes = {
  filters: PropTypes.shape({
    collection: PropTypes.array,
    productType: PropTypes.array,
  }),
  extraPadding: PropTypes.bool,
  onFilter: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.object),
      compareAtPrice: PropTypes.string,
      price: PropTypes.string,
      soldOut: PropTypes.bool,
      onSale: PropTypes.bool,
      title: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default ProductGrid;
