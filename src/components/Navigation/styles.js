import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import { Container as BaseContainer } from '@utils/styles';
import space from '@utils/space';
import BaseIcon from '@components/Icon';
import BaseLogo from '@components/Logo';

export const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Icon = styled(BaseIcon)`
  fill: ${props => props.light ? colors.N0 : colors.N900};
  width: 16px;
`;

export const Logo = styled(BaseLogo)`
  height: 20px;
  width: 226px;
  fill: ${props => (props.light ? colors.N0 : colors.N900)};
`;

export const LogoLink = styled(Link)`
  margin-right: ${space[7]};
  line-height: 1;
`;

export const Nav = styled.div`
  ${props =>
    props.light &&
    css`
      & ${NavLink} {
        color: ${colors.N0};
      }
    `}
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: ${colors.N900};
  font-family: ${fonts.CONDENSED};
  font-size: 14px;
  font-style: italic;
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: ${space[5]};
  }
`;
