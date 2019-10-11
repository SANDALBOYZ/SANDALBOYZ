import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { H300 } from '@utils/type';
import * as styled from './styles';

const FeaturedStoryCard = ({ href, image, title }) => (
  <styled.Wrapper>
    <styled.Image image={image} />
    <styled.Info>
      <styled.H600>Featured Story</styled.H600>
      <Link to={href}>
        <H300>{title}</H300>
      </Link>
    </styled.Info>
  </styled.Wrapper>
);

FeaturedStoryCard.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturedStoryCard;
