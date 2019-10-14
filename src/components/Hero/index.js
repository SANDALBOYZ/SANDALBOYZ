import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { Breakpoint, breakpoints } from '@utils/styles';
import { H100 } from '@utils/type';
import * as styled from './styles';

export const Hero = ({ href, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background image={get(image, 'childImageSharp.fluid.src', image)}>
      <Breakpoint min={breakpoints.lg}>
        <styled.Button theme="light" href={href}>
          Read article
        </styled.Button>
      </Breakpoint>
    </styled.Background>
    <styled.Box>
      {label && <styled.H500>{label}</styled.H500>}
      <H100>{title}</H100>
      <Breakpoint max={breakpoints.lg}>
        <styled.Button href={href}>Read article</styled.Button>
      </Breakpoint>
    </styled.Box>
  </styled.Wrapper>
);

Hero.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Hero;
