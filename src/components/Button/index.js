import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import { baseButton, sizes, themes } from './styles';

const Button = props => {
  const {
    children,
    fullWidth,
    href,
    loading,
    onClick,
    size,
    theme,
    ...rest
  } = props;

  const styles = css`
    ${!theme ? baseButton : themes[theme]}
    ${sizes[size]}
    ${fullWidth &&
      css`
        width: 100%;
      `}
  `;

  const StyledButton = href
    ? styled(Link).attrs({ to: href })`
        ${styles}
      `
    : styled.button.attrs({ onClick })`
        ${styles}
      `;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  theme: PropTypes.string,
  layout: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
