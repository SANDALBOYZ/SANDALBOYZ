import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import format from 'date-fns/format';
import truncate from 'lodash/truncate';

import { AbsoluteImg } from '@utils/styles';
import { Body } from '@utils/type';
import * as styled from './styles';

const StoryTile = ({ category, date, href, image, lede, title }) => (
  <styled.Wrapper>
    <styled.ImageWrapper>
      {image && (
        <AbsoluteImg fluid={image} />
      )}
    </styled.ImageWrapper>
    <Link to={href}>
      <styled.Inner>
        {category && <styled.H600>{category}</styled.H600>}
        <styled.H400>{title}</styled.H400>
        <Body>{format(new Date(date), 'MMMM d, yyyy')}</Body>
        <styled.Lede>{truncate(lede, { length: 124 })}</styled.Lede>
      </styled.Inner>
    </Link>
  </styled.Wrapper>
);

StoryTile.propTypes = {
  category: PropTypes.string,
  href: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default StoryTile;
