import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@utils/styles';
import ProductTile from '@components/ProductTile';
import * as styled from './styles';

const ProductGrid = ({ products, title }) => (
  <styled.Wrapper>
    <Container>
      <styled.H500>{title}</styled.H500>
      <styled.Products>
        {products.map(product => (
          <ProductTile {...product} />
        ))}
      </styled.Products>
    </Container>
  </styled.Wrapper>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.string,
    soldOut: PropTypes.bool,
    title: PropTypes.string.isRequired,
  })),
  title: PropTypes.string.isRequired,
};

export default ProductGrid;
