import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import { baseButton, sizes, themes } from './styles';

const Button = props => {
  const { children, external, fullWidth, href, loading, size, theme, ...rest } = props;

  const styles = css`
    ${!theme ? baseButton : themes[theme]}
    ${sizes[size]}
    ${fullWidth &&
      css`
        padding: 0;
        width: 100%;
      `}
  `;

  let StyledButton = styled.button`
    ${styles}
  `;

  if (external && href) {
    StyledButton = styled.a.attrs({ href })`
      ${styles}
    `;
  } else if (href) {
    StyledButton = styled(Link).attrs({ to: href })`
      ${styles}
    `;
  }

  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  theme: PropTypes.oneOf(['light', 'outline']),
};

export default Button;
