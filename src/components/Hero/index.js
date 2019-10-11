import React from 'react';
import PropTypes from 'prop-types';

import { H100 } from '@utils/type';
import * as styled from './styles';

const Hero = ({ cta, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background image={image}>
      <styled.Button theme="light" href={cta.href}>
        {cta.name}
      </styled.Button>
    </styled.Background>
    <styled.Box>
      {label && <styled.ContentLabel>{label}</styled.ContentLabel>}
      <H100>{title}</H100>
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
