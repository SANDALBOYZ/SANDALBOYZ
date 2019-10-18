import React from 'react';
import PropTypes from 'prop-types';

import { AbsoluteImg } from '@utils/styles';
import * as styled from './styles';

const BannerDark = ({ cta, image, label, title }) => (
  <styled.Wrapper>
    <styled.Background>
      {image && (
        <AbsoluteImg image={image} />
      )}
    </styled.Background>
    <styled.Box>
      {label && <styled.ContentLabel>{label}</styled.ContentLabel>}
      <styled.H200>{title}</styled.H200>
      <styled.Button theme="light" href={cta.href}>
        {cta.name}
      </styled.Button>
    </styled.Box>
  </styled.Wrapper>
);

BannerDark.propTypes = {
  cta: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BannerDark;
