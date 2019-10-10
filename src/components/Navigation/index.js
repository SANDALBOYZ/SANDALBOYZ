import React from 'react';
import PropTypes from 'prop-types';

import * as styled from './styles';

const Navigation = ({ light }) => (
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
        <styled.NavLink to="/cart" alt="Cart">
          <styled.Icon name="briefcase" light={light} />
        </styled.NavLink>
        <styled.NavLink to="/login">Login</styled.NavLink>
      </styled.NavSection>
    </styled.Container>
  </styled.Nav>
);

Navigation.propTypes = {
  light: PropTypes.bool,
};

export default Navigation;
