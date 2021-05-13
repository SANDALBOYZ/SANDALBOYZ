import React from 'react';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space from '@utils/space';

export const baseStyles = css`
  display: inline-block;
  position: relative;
  height: 40px;
  padding: 0 ${space[4]};
  color: ${colors.WINTER_WHITE};
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-size: 14px;
  font-weight: ${weights.REGULAR};
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: #333;
  border: 0;
  outline: 0;
  user-select: none;
  appearance: none;
  cursor: pointer;
  transition: background-color linear 100ms, color linear 100ms,
    fill linear 100ms;

  &:disabled {
    color: ${colors.N300};
    background-color: #dadada;
    pointer-events: none;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors.N800};
  }

  & > svg {
    height: 18px;
    vertical-align: middle;
    transform: translateY(-1px);
  }

  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const PrimaryButton = styled.button`
  ${baseStyles};
`;

const SecondaryButton = styled.button`
  ${baseStyles};
  color: ${colors.N800};
  background-color: ${colors.WINTER_WHITE};
  border: 1px solid ${colors.N800};

  &:hover {
    background-color: ${colors.BONE_WHITE};
  }
`;

const OutlineButton = styled.button`
  ${baseStyles};
  color: ${colors.N800};
  background-color: transparent;
  border: 1px solid ${colors.N800};

  &:hover {
    background-color: ${colors.N100};
    border-color: ${colors.N800};
  }
`;

const TextButton = styled.button`
  padding: 0;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-size: 12px;
  font-weight: ${weights.NORMAL};
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
  appearance: none;
  cursor: pointer;
`;

// Button2
const Button2 = ({ theme = 'Primary', children, ...rest }) => {
  switch (theme) {
    case 'primary':
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
    case 'secondary':
      return <SecondaryButton {...rest}>{children}</SecondaryButton>;
    case 'outline':
      return <OutlineButton {...rest}>{children}</OutlineButton>;
    case 'text':
      return <TextButton {...rest}>{children}</TextButton>;
    default:
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  }
};

export default Button2;
