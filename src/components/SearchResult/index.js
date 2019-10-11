import React from 'react';
import PropTypes from 'prop-types';

import truncate from '@utils/truncate';
import Button from '@components/Button';
import * as styled from './styles';

const SearchResult = ({ collection, description, href, image, price, title }) => (
  <styled.Wrapper>
    <styled.Image image={image} />
    <styled.Info>
      <styled.H400>{collection && `${collection} | `}{title}</styled.H400>
      <styled.H500>{price} USD</styled.H500>
      <styled.Body>{truncate(description, 240)}</styled.Body>
      <Button href={href} size="small">
        See product
      </Button>
    </styled.Info>
  </styled.Wrapper>
);

SearchResult.propTypes = {
  collection: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchResult;
