import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { H300 } from '@utils/type';
import * as styled from './styles';

const RecentStories = ({ storyA, storyB }) => (
  <styled.Container>
    <styled.H500>03 / Recent Stories</styled.H500>
    <styled.Inner>
      <styled.Wrapper>
        <styled.Image image={storyA.image} />
        <styled.Info>
          <styled.H600>Recent Story</styled.H600>
          <Link to={storyA.href}>
            <H300>{storyA.title}</H300>
          </Link>
        </styled.Info>
      </styled.Wrapper>
      <styled.Wrapper>
        <styled.Image image={storyB.image} />
        <styled.Info>
          <styled.H600>Recent Story</styled.H600>
          <Link to={storyB.href}>
            <H300>{storyB.title}</H300>
          </Link>
        </styled.Info>
      </styled.Wrapper>
    </styled.Inner>
  </styled.Container>
);

RecentStories.propTypes = {
  storyA: PropTypes.shape({
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  storyB: PropTypes.shape({
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecentStories;
