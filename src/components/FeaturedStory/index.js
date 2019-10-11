import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import * as styled from './styles';

const FeaturedStory = ({ href, image, label, title }) => (
  <styled.Wrapper image={image}>
    <styled.Inner>
      <styled.Overlay />
      {label && (
        <styled.ContentLabel>{label}</styled.ContentLabel>
      )}
      <Link to={href}>
        <styled.H200>{title}</styled.H200>
      </Link>
    </styled.Inner>
  </styled.Wrapper>
);

FeaturedStory.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default FeaturedStory;
