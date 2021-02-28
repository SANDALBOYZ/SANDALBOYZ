import Link from 'gatsby-link';
import styled from 'styled-components';

import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 48px;
  padding: 0 ${H_PADDING_MOBILE};

  & > a {
    color: ${colors.N0};
  }
`;

const activeClassName = 'active';

export const NavLink = styled(Link).attrs({ activeClassName })`
  display: block;
  color: ${colors.BLACK_6_C};
  font-family: ${fonts.NIMBUS};
  font-size: 20px;
  font-weight: ${weights.NORMAL};

  &:not(:last-child) {
    margin-bottom: ${space[2]};
  }
`;

export const Links = styled.div`
  margin-top: 100px;
  padding: 0 20px;
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: ${colors.BONE_WHITE};
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 250ms ease-in;
`;
