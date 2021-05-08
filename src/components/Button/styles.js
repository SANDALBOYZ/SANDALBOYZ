import { css } from 'styled-components';

import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space from '@utils/space';
import { mq } from '@utils/styles';

export const baseButton = css`
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
  transition: background-color linear 100ms, color linear 100ms, fill linear 100ms;

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

  ${mq.gtmd} {
    height: 50px;
    padding: 0 ${space[6]};
    line-height: 48px;
  }
`;

export const sizes = {
  small: css`
    ${mq.gtmd} {
      height: 40px;
      padding: 0 ${space[3]};
      line-height: 40px;
    }
  `,
  large: css`
    ${mq.gtmd} {
      height: 60px;
      padding: 0 ${space[5]};
      line-height: 60px;
    }
  `,
};

const textThemeStyles = css`
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
  text: css`
    ${textThemeStyles}
  `,
  text_danger: css`
    ${textThemeStyles}
    color: ${colors.NEGATIVE};
  `,
};
