import Link from 'gatsby-link';
import styled from 'styled-components';

import colors from '@utils/colors';
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
  color: ${colors.N0};

  &.${activeClassName} {
    color: ${colors.N600};
    text-decoration: line-through;
  }

  &:not(:last-child) {
    margin-bottom: ${space[5]};
  }
`;

export const Links = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  color: ${colors.N0};
  background-color: ${colors.N700};
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 150ms linear;
`;
