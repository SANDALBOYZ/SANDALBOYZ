import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import { Container as BaseContainer, mq } from '@utils/styles';
import space from '@utils/space';
import BaseIcon from '@components/Icon';
import BaseLogo from '@components/Logo';

const activeClassName = 'active';

export const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;

  ${mq.gtlg} {
    height: 80px;
  }
`;

export const Icon = styled(BaseIcon)`
  fill: ${props => (props.light ? colors.N0 : colors.N900)};
  width: 22px;

  ${mq.gtlg} {
    width: 16px;
  }
`;

export const Logo = styled(BaseLogo)`
  height: 14px;
  fill: ${props => (props.light && !props.cartOpen ? colors.N0 : colors.N900)};

  ${mq.gtlg} {
    height: 20px;
    fill: ${props => (props.light ? colors.N0 : colors.N900)};
  }
`;

export const LogoLink = styled(Link)`
  margin-right: ${space[7]};
  line-height: 1;
`;

export const MobileNavWrapper = styled.div`
  ${mq.gtlg} {
    display: none;
  }
`;

const getNavBackground = props => {
  if (props.cartOpen && props.hasScrolled) {
    return colors.N0;
  }

  if (props.hasScrolled) {
    return colors.N0;
  }

  return 'transparent';
};

export const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background-color: ${getNavBackground};
  transition: background-color 100ms linear;

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

const navLinkStyles = css`
  color: ${colors.N900};
  font-family: ${fonts.CONDENSED};
  font-size: 14px;
  // font-style: italic;
  font-weight: ${weights.LIGHT};
  letter-spacing: 0px;
  line-height: 1;
  // text-transform: uppercase;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${space[4]};
  }

  ${mq.gtlg} {
    display: inline-block;

    &:not(:last-child) {
      margin-right: ${space[5]};
    }
  }
`;

// Used for text links.
export const NavLink = styled(Link).attrs({
  activeClassName,
})`
  ${navLinkStyles}
  display: none;

  &:after {
    content: "";
    border-bottom: 1px solid;
    display: block;
    transform: scaleX(0) translateY(4px);
    transition: transform 500ms cubic-bezier(0.645, 0.045, 0.345, 1) 0ms;
    transform-origin: top left;
  }

  &:hover {
    &::after {
      transform: scaleX(1) translateY(4px);
      transition: transform 500ms cubic-bezier(0.645, 0.045, 0.345, 1) 0ms;
      transform-origin: top left;
    }
  }

  &:not(:first-child).${activeClassName} {
    &::after {
      transform: scaleX(1) translateY(4px);
    }
  }
`;

// Buttons do need the underline animation.
export const NavButton = styled(Link)`
  ${navLinkStyles}
  display: none;
`;

export const MobileNavLink = styled.a`
  ${navLinkStyles}
  display: inline-block;
  cursor: pointer;
`;
