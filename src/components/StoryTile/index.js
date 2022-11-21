import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import format from 'date-fns/format';
import truncate from 'lodash/truncate';

import { AbsoluteImg } from '@utils/styles';
import { Body } from '@utils/type';
import * as styled from './styles';

const StoryTile = ({ category, date, href, image, lede, title }) => (
  <styled.Wrapper>
    <Link to={href}>
      <styled.ImageWrapper>
        {image && <AbsoluteImg image={image} />}
      </styled.ImageWrapper>
      <styled.Inner>
        {category && <styled.Tag>{category}</styled.Tag>}
        <styled.H3>{title}</styled.H3>
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
