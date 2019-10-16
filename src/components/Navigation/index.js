import React from 'react';
import PropTypes from 'prop-types';

import MobileMenuToggle from '@components/MobileMenuToggle';
import * as styled from './styles';

const Navigation = ({
  cartOpen,
  hideCart,
  light,
  menuOpen,
  onCartClose,
  onCartOpen,
  onMenuClose,
  onMenuOpen,
}) => {
  let toggleFunction = menuOpen ? onMenuClose : onMenuOpen;

  if (cartOpen) {
    toggleFunction = onCartClose;
  }

  return (
    <styled.Nav cartOpen={cartOpen} light={light}>
      <styled.Container>
        <styled.NavSection>
          <styled.LogoLink to="/">
            <styled.Logo cartOpen={cartOpen} light={light} />
          </styled.LogoLink>
          <styled.NavLink to="/products">Products</styled.NavLink>
          <styled.NavLink to="/stories">Stories</styled.NavLink>
          <styled.NavLink to="/contact">Contact</styled.NavLink>
        </styled.NavSection>
        <styled.NavSection>
          <styled.NavLink to="/search" alt="Search">
            <styled.Icon name="search" light={light} />
          </styled.NavLink>
          {!hideCart && (
            <styled.MobileNavLink onClick={onCartOpen}>
              <styled.Icon name="briefcase" light={light} />
            </styled.MobileNavLink>
          )}
          <MobileMenuToggle
            light={light && !cartOpen}
            open={cartOpen || menuOpen}
            onClick={toggleFunction}
          />
          <styled.NavLink to="/login">Login</styled.NavLink>
        </styled.NavSection>
      </styled.Container>
    </styled.Nav>
  );
};

Navigation.propTypes = {
  cartOpen: PropTypes.bool,
  hideCart: PropTypes.bool,
  light: PropTypes.bool,
  menuOpen: PropTypes.bool.isRequired,
  onCartClose: PropTypes.func.isRequired,
  onCartOpen: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func,
};

export default Navigation;
