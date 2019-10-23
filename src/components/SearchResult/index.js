import React from 'react';
import PropTypes from 'prop-types';

import getPrice from '@utils/price';
import { AbsoluteImg, Breakpoint, breakpoints } from '@utils/styles';
import truncate from '@utils/truncate';
import Button from '@components/Button';
import * as styled from './styles';

const SearchResult = ({ collection, description, href, image, price, title }) => (
  <styled.Wrapper>
    <styled.Image>
      {image && (
        <AbsoluteImg fluid={image} />
      )}
    </styled.Image>
    <styled.Info>
      <styled.H400>{collection && `${collection} | `}{title}</styled.H400>
      <styled.H500>{getPrice(price)}</styled.H500>
      <styled.Body>{truncate(description, 240)}</styled.Body>
      <Breakpoint min={breakpoints.lg}>
        <Button href={href} size="small">
          See product
        </Button>
      </Breakpoint>
    </styled.Info>
  </styled.Wrapper>
);

SearchResult.propTypes = {
  collection: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  price: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SearchResult;
