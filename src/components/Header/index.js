import React from 'react';
import PropTypes from 'prop-types';

import * as styled from './styles';

const Header = ({ children, label, theme, title }) => (
  <styled.Wrapper theme={theme}>
    {label && <styled.ContentLabel theme={theme}>{label}</styled.ContentLabel>}
    <styled.TitleContainer>
      <styled.H200 theme={theme}>{title}</styled.H200>
      {children && <styled.Children>{children}</styled.Children>}
    </styled.TitleContainer>
  </styled.Wrapper>
);

Header.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  theme: 'light',
};

export default Header;
