import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import getPrice from '@utils/price';
import { AbsoluteImg, Breakpoint, breakpoints } from '@utils/styles';
import { Badge, H300M, H400, H600 } from '@utils/type';
import * as styled from './styles';

const ProductTile = ({ href, image, price, soldOut, title }) => (
  <styled.Wrapper>
    <Link to={href}>
      {soldOut && (
        <styled.SoldOut>
          <Badge>Sold out</Badge>
        </styled.SoldOut>
      )}
      <styled.ImageWrapper>
        {image && (
          <AbsoluteImg fluid={image} />
        )}
      </styled.ImageWrapper>
      <styled.Info>
        <H600>{getPrice(price)}</H600>
        <Breakpoint max={breakpoints.lg}>
          <H300M>{title}</H300M>
        </Breakpoint>
        <Breakpoint min={breakpoints.lg}>
          <H400>{title}</H400>
        </Breakpoint>
      </styled.Info>
    </Link>
  </styled.Wrapper>
);

ProductTile.propTypes = {
  image: PropTypes.object,
  price: PropTypes.string,
  soldOut: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default ProductTile;
