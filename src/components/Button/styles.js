import { css } from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';

export const baseButton = css`
  display: inline-block;
  position: relative;
  height: 50px;
  padding: 0 ${space[6]};
  color: ${colors.N0};
  font-family: ${fonts.CONDENSED};
  font-size: 15px;
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  line-height: 48px;
  text-align: center;
  text-indent: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: ${colors.N700};
  border: none;
  outline: none;
  user-select: none;
  appearance: none;
  cursor: pointer;
  transition: background-color linear 100ms, color linear 100ms,
    fill linear 100ms;

  &:disabled {
    color: ${colors.N400};
    pointer-events: none;
  }

  &:hover {
    background-color: ${colors.N800};
  }

  & > svg {
    vertical-align: middle;
    transform: translateY(-1px);
  }
`;

export const sizes = {
  small: css`
    height: 40px;
    padding: 0 ${space[3]};
    line-height: 40px;
  `,
  large: css`
    height: 60px;
    padding: 0 ${space[5]};
    line-height: 60px;
  `,
};

export const themes = {
  outline: css`
    ${baseButton};
    color: ${colors.N900};
    background-color: transparent;
    border: 1px solid ${colors.N800};

    &:hover {
      background-color: ${colors.N100};
      border-color: ${colors.N900};
    }
  `,
  light: css`
    ${baseButton};
    color: ${colors.N900};
    background-color: ${colors.N0};

    &:hover {
      background-color: ${colors.N100};
    }
  `,
};
