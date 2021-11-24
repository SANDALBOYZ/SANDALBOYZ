import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { useBodyScrollLock, useHideZeWidget } from '@utils/hooks';

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
  z-index: 9000;
  background-color: ${colors.BONE_WHITE};
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 250ms ease-in;
`;

export function MobileMenu({
  authLinks,
  onCartClose,
  onCartOpen,
  onMenuClose,
  onMenuOpen,
  open,
}) {
  useBodyScrollLock(open);
  useHideZeWidget(open);

  return (
    <MobileMenuWrapper open={open}>
      <Links>
        <NavLink to="/sale" onClick={onMenuClose} partiallyActive style={{color: 'red'}}>
          Sale
        </NavLink>
        <NavLink to="/products" onClick={onMenuClose} partiallyActive>
          Products
        </NavLink>
        <NavLink to="/stories" onClick={onMenuClose} partiallyActive>
          Stories
        </NavLink>
        <NavLink to="/about" onClick={onMenuClose}>
          About
        </NavLink>
        <NavLink to="/search" onClick={onMenuClose}>
          Search
        </NavLink>
        <NavLink to="/contact" onClick={onMenuClose}>
          Contact
        </NavLink>
      </Links>

      {/* <Footer>
          {authLinks.map(authLink => (
            <Link key={authLink.name} to={authLink.href} onClick={onMenuClose}>
              <H500>{authLink.name}</H500>
            </Link>
          ))}
        </Footer> */}
    </MobileMenuWrapper>
  );
}

MobileMenu.propTypes = {
  authLinks: PropTypes.array,
  onCartOpen: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

MobileMenu.defaultProps = {
  authLinks: [],
};

export default MobileMenu;
