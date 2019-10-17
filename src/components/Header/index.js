import React from 'react';
import PropTypes from 'prop-types';

import * as styled from './styles';

const Header = ({ children, label, shrinkOnMobile, theme, title }) => (
  <styled.Wrapper shrinkOnMobile={shrinkOnMobile} theme={theme}>
    {label && <styled.ContentLabel theme={theme}>{label}</styled.ContentLabel>}
    <styled.TitleContainer>
      <styled.H200 theme={theme}>{title}</styled.H200>
    </styled.TitleContainer>
    {children && <styled.Children>{children}</styled.Children>}
  </styled.Wrapper>
);

Header.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  shrinkOnMobile: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  theme: 'light',
};

export default Header;
