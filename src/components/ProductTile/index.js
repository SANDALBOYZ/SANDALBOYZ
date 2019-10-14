import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Badge, H400, H600 } from '@utils/type';
import * as styled from './styles';

const ProductTile = ({ href, image, price, soldOut, title }) => (
  <styled.Wrapper>
    {soldOut && (
      <styled.SoldOut>
        <Badge>Sold out</Badge>
      </styled.SoldOut>
    )}
    <styled.Image image={image} />
    <styled.Info>
      <H600>{price} USD</H600>
      <Link to={href}>
        <H400>{title}</H400>
      </Link>
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
