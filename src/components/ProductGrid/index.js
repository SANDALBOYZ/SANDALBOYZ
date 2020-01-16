import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { ContentLabel } from '@utils/type';
import Icon from '@components/Icon';
import ProductTile from '@components/ProductTile';
import * as styled from './styles';

const ProductGrid = ({ cta, filters, offset, onFilter, products, title, titleIcon }) => {
  const clearFilter = (key, filter) => {
    const newFilters = { collection: [], productType: [] };

    Object.keys(filters).forEach(key => {
      newFilters[key] = filters[key].filter(f => f !== filter);
    });

    onFilter(newFilters);
  };

  return (
    <styled.Wrapper offset={offset}>
      <styled.Container>
        <styled.Header>
          <styled.Title>
            {cta ? (
              <Link to="/products">
                <styled.H500>
                  {title}
                  {titleIcon && (
                    <Icon name={titleIcon} />
                  )}
                </styled.H500>
              </Link>
            ) : (
              <styled.H500>
                {title}
                {titleIcon && (
                  <Icon name={titleIcon} />
                )}
              </styled.H500>
            )}
            {filters &&
              Object.keys(filters).map(key =>
                filters[key].map(filter => (
                  <styled.Filter key={filter}>
                    {filter}
                    <styled.ClearFilter
                      onClick={() => {
                        clearFilter(key, filter);
                      }}
                    >
                      <styled.Icon name="x" />
                    </styled.ClearFilter>
                  </styled.Filter>
                ))
              )}
          </styled.Title>
          {cta && (
            <Link to="/products">
              <ContentLabel>
                {cta}
              </ContentLabel>
            </Link>
          )}
        </styled.Header>
        <styled.Products>
          {products.map(product => (
            <ProductTile key={product.id} {...product} />
          ))}
        </styled.Products>
      </styled.Container>
    </styled.Wrapper>
  );
};

ProductGrid.propTypes = {
  filters: PropTypes.shape({
    collection: PropTypes.array,
    productType: PropTypes.array,
  }),
  offset: PropTypes.bool,
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
