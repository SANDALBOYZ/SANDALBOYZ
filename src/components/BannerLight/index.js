import React from 'react';
import PropTypes from 'prop-types';

import { H200 } from '@utils/type';
import * as styled from './styles';

const BannerLight = ({ cta, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background image={image} />
    <styled.Box>
      {label && <styled.ContentLabel>{label}</styled.ContentLabel>}
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
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BannerLight;
