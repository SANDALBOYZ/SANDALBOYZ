import React from 'react';
import PropTypes from 'prop-types';

import { Breakpoint, breakpoints } from '@utils/styles';
import { H100 } from '@utils/type';
import * as styled from './styles';

const Hero = ({ cta, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background image={image}>
      <Breakpoint min={breakpoints.lg}>
        <styled.Button theme="light" href={cta.href}>
          {cta.name}
        </styled.Button>
      </Breakpoint>
    </styled.Background>
    <styled.Box>
      {label && <styled.ContentLabel>{label}</styled.ContentLabel>}
      <H100>{title}</H100>
      <Breakpoint max={breakpoints.lg}>
        <styled.Button href={cta.href}>
          {cta.name}
        </styled.Button>
      </Breakpoint>
    </styled.Box>
  </styled.Wrapper>
);

Hero.propTypes = {
  cta: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Hero;
