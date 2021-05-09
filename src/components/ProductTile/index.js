import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import styled from 'styled-components';

import getPrice from '@utils/price';
import { AbsoluteImg, mq } from '@utils/styles';
import { Badge } from '@utils/type';
import colors, { randomSandalboyzColor } from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { fonts, weights } from '@utils/fonts';

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: ${colors.N100};

  & > *:last-child {
    opacity: 0;
    transition: opacity 0.25s linear;
  }

  &:hover {
    & > *:last-child {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }
`;

export const Info = styled.div`
  padding: ${space[3]} ${H_PADDING_MOBILE} 0;

  ${mq.gtlg} {
    padding: ${space[1]} 0 ${space[5]};
  }
`;

export const Status = styled.div`
  position: absolute;
  top: ${space[2]};
  left: ${space[2]};
  z-index: 1;
  padding: 0 ${space[1]};
  color: ${colors.N0};
  background-color: ${colors.NEGATIVE};

  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`;

export const ProductTileWrapper = styled.div`
  display: flex;
  opacity: 0;
  transform: translateY(50px);
  flex-direction: column;
  position: relative;
  margin-bottom: ${space[3]};

  ${mq.gtlg} {
    margin-bottom: 0;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.9s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export const Subtitle = styled.h4`
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.REGULAR};
  font-size: 10px;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
`;

export const Price = styled.h4`
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
`;

const ProductTile = ({
  compareAtPrice,
  href,
  images,
  onSale,
  price,
  soldOut,
  title,
  productType,
}) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!visible) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    // Capture `.current` so it can be `unobserved` below
    const domRefCurrent = domRef.current;

    observer.observe(domRefCurrent);

    return () => observer.unobserve(domRefCurrent);
  }, [visible]);

  return (
    <ProductTileWrapper
      ref={domRef}
      className={visible ? 'visible' : ''}
      visible={visible}
    >
      <Link to={href}>
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
        <ImageWrapper>
          {get(images, '0') && (
            <AbsoluteImg
              image={images[0]}
              backgroundColor={randomSandalboyzColor()}
            />
          )}
          {get(images, '1') && (
            <AbsoluteImg
              image={images[1]}
              backgroundColor={randomSandalboyzColor()}
            />
          )}
        </ImageWrapper>
        <Info>
          <Subtitle>{productType}</Subtitle>
          <Title>{title}</Title>
          <Price>{getPrice(price, compareAtPrice)}</Price>
        </Info>
      </Link>
    </ProductTileWrapper>
  );
};

ProductTile.propTypes = {
  compareAtPrice: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  onSale: PropTypes.bool,
  price: PropTypes.string,
  soldOut: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default ProductTile;
