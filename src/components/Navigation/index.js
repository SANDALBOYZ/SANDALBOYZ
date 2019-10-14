import React from 'react';
import PropTypes from 'prop-types';

import MobileMenuToggle from '@components/MobileMenuToggle';
import * as styled from './styles';

const Navigation = ({ light, menuOpen, onMenuClose, onMenuOpen }) => (
  <styled.Nav light={light}>
    <styled.Container>
      <styled.NavSection>
        <styled.LogoLink to="/">
          <styled.Logo light={light} />
        </styled.LogoLink>
        <styled.NavLink to="/products">Products</styled.NavLink>
        <styled.NavLink to="/stories">Stories</styled.NavLink>
        <styled.NavLink to="/contact">Contact</styled.NavLink>
      </styled.NavSection>
      <styled.NavSection>
        <styled.NavLink to="/search" alt="Search">
          <styled.Icon name="search" light={light} />
        </styled.NavLink>
        <styled.MobileNavLink to="/cart" alt="Cart">
          <styled.Icon name="briefcase" light={light} />
        </styled.MobileNavLink>
        <styled.NavLink to="/login">Login</styled.NavLink>
        <MobileMenuToggle
          light={light}
          open={menuOpen}
          onClick={menuOpen ? onMenuClose : onMenuOpen}
        />
      </styled.NavSection>
    </styled.Container>
  </styled.Nav>
);

Navigation.propTypes = {
  light: PropTypes.bool,
  menuOpen: PropTypes.bool.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func.isRequired,
};

export default Navigation;
