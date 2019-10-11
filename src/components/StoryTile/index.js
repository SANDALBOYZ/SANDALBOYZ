import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import * as styled from './styles';

const StoryTile = ({ category, href, image, title }) => (
  <styled.Wrapper image={image}>
    <styled.Overlay />
    <styled.Inner>
      <styled.H600>{category}</styled.H600>
      <Link to={href}>
        <styled.H400>{title}</styled.H400>
      </Link>
    </styled.Inner>
  </styled.Wrapper>
);

StoryTile.propTypes = {
  category: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default StoryTile;
