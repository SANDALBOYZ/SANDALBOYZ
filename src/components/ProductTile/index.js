import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';

import getPrice from '@utils/price';
import { AbsoluteImg, Breakpoint, breakpoints } from '@utils/styles';
import { Badge, H300M, H400, H600 } from '@utils/type';
import { randomSandalboyzColor } from '@utils/colors';
import * as styled from './styles';

const ProductTile = ({
  compareAtPrice,
  href,
  images,
  onSale,
  price,
  soldOut,
  title,
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
    <styled.ProductTileWrapper ref={domRef} className={visible ? 'visible' : ''} visible={visible}>
      <Link to={href}>
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
        <styled.ImageWrapper>
          {get(images, '0') && <AbsoluteImg fluid={images[0]} backgroundColor={randomSandalboyzColor()} />}
          {get(images, '1') && <AbsoluteImg fluid={images[1]} backgroundColor={randomSandalboyzColor()} />}
        </styled.ImageWrapper>
        <styled.Info>
          <H600>{getPrice(price, compareAtPrice)}</H600>
          <Breakpoint max={breakpoints.lg}>
            <H300M>{title}</H300M>
          </Breakpoint>
          <Breakpoint min={breakpoints.lg}>
            <H400>{title}</H400>
          </Breakpoint>
        </styled.Info>
      </Link>
    </styled.ProductTileWrapper>
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
