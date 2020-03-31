import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';

export const Dropdown = styled.div`
  position: absolute;
  right: -1px;
  left: -1px;
  z-index: 10;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-right-color: ${colors.N500};
  border-bottom-color: ${colors.N500};
  border-left-color: ${colors.N500};
  max-height: 380px;
  overflow: scroll;

  ${props => {
    if (props.dropUp) {
      if (props.optionsLength > 10) {
        return css`
          top: -380px;
          border-top-color: ${colors.N500};
        `;
      } else {
        return css`
          top: calc(-38px * ${props.optionsLength});
          border-top-color: ${colors.N500};
        `;
      }
    }

    return css`top: 38px;`;
  }}
`;

export const Option = styled.div`
  height: 38px;
  padding: 0 ${space[1]};
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${colors.N100};
  }
`;

export const Value = styled.span`
  padding: 0 ${space[1]};
`;

export const DropdownWrapper = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  height: 40px;
  padding: 0 ${space[1]};
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-radius: 0;
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  font-size: 16px;
  line-height: 40px;
  text-align: left;

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }

  & svg {
    position: absolute;
    top: 0;
    right: ${space[1]};
    bottom: 0;
    margin: auto 0;
    height: 24px;
    pointer-events: none;
  }
`;
