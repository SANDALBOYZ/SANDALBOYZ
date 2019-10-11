import React from 'react';
import PropTypes from 'prop-types';

import { Badge, H400, H600 } from '@utils/type';
import * as styled from './styles';

const ProductTile = ({ image, price, soldOut, title }) => (
  <styled.Wrapper>
    {soldOut && (
      <styled.SoldOut>
        <Badge>Sold out</Badge>
      </styled.SoldOut>
    )}
    <styled.Image />
    <styled.Info>
      <H600>{price} USD</H600>
      <H400>{title}</H400>
    </styled.Info>
  </styled.Wrapper>
);

ProductTile.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string,
  soldOut: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default ProductTile;
