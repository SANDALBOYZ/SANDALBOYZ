import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { AbsoluteImg } from '@utils/styles';
import * as styled from './styles';

const StoryTile = ({ category, href, image, title }) => (
  <styled.Wrapper>
    {image && (
      <AbsoluteImg fluid={image} />
    )}
    <Link to={href}>
      <styled.Overlay />
      <styled.Inner>
        {category && <styled.H600>{category}</styled.H600>}
        <styled.H400>{title}</styled.H400>
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
