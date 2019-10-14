import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { H200 } from '@utils/type';
import * as styled from './styles';

const BannerLight = ({ cta, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background image={get(image, 'childImageSharp.fluid.src', image)} />
    <styled.Box>
      {label && <styled.H500>{label}</styled.H500>}
      <H200>{title}</H200>
      <styled.Button href={cta.href}>
        {cta.name}
      </styled.Button>
    </styled.Box>
  </styled.Wrapper>
);

BannerLight.propTypes = {
  cta: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BannerLight;
