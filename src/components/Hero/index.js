import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { randomSandalboyzColor } from '@utils/colors';
import { AbsoluteImg, Breakpoint, breakpoints } from '@utils/styles';
import * as styled from './styles';

export const Hero = ({ href, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background>
      {image && (
        <AbsoluteImg fluid={image} backgroundColor={randomSandalboyzColor} />
      )}
      <Breakpoint min={breakpoints.lg}>
        <styled.Button theme="light" href={href}>
          Read Article
        </styled.Button>
      </Breakpoint>
    </styled.Background>
    <styled.Box>
      {label && <styled.H500>{label}</styled.H500>}
      <styled.H100 isLong={get(title, 'length') > 48}>{title}</styled.H100>
      <Breakpoint max={breakpoints.lg}>
        <styled.Button href={href}>Read Article</styled.Button>
      </Breakpoint>
    </styled.Box>
  </styled.Wrapper>
);

Hero.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Hero;
