import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import { breakpoints, mq } from '@utils/styles';
import { baseButton, sizes, themes } from './styles';

const getTheme = (theme) => {
  if (!theme) {
    return baseButton;
  }

  if (typeof theme === 'string') {
    return themes[theme];
  }

  if (typeof theme === 'object') {
    return css`
      ${baseButton}

      ${mq.gtxs} {
        ${themes[theme[breakpoints.xs]]}
      }
      ${mq.gtsm} {
        ${themes[theme[breakpoints.sm]]}
      }
      ${mq.gtmd} {
        ${themes[theme[breakpoints.md]]}
      }
      ${mq.gtlg} {
        ${themes[theme[breakpoints.lg]]}
      }
      ${mq.gtxl} {
        ${themes[theme[breakpoints.xl]]}
      }
    `;
  }
};

const Button = props => {
  const {
    children,
    external,
    fullWidth,
    href,
    loading,
    size,
    theme,
    ...rest
  } = props;

  const styles = css`
    ${getTheme(theme)}
    ${sizes[size]}
    ${fullWidth &&
      css`
        padding: 0 !important;
        width: 100%;
      `}
  `;

  let StyledButton = styled.button`
    ${styles}
  `;

  if (!rest.disabled) {
    if (external && href) {
      StyledButton = styled.a.attrs({ href })`
      ${styles}
      `;
    } else if (href) {
      StyledButton = styled(Link).attrs({ to: href })`
      ${styles}
      `;
    }
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
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
