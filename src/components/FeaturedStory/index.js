import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { AbsoluteImg } from '@utils/styles';
import * as styled from './styles';

const FeaturedStory = ({ href, image, label, title }) => (
  <styled.Wrapper>
    <AbsoluteImg fluid={image} />
    <styled.Inner>
      <styled.Overlay />
      <Link to={href}>
        {label && <styled.ContentLabel>{label}</styled.ContentLabel>}
        <styled.H200>{title}</styled.H200>
      </Link>
    </styled.Inner>
  </styled.Wrapper>
);

FeaturedStory.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default FeaturedStory;
