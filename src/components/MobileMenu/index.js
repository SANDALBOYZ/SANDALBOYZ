import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { H300, H500 } from '@utils/type';
import Navigation from '@components/Navigation';
import * as styled from './styles';

class MobileMenu extends Component {
  static propTypes = {
    authLinks: PropTypes.array,
    onCartOpen: PropTypes.func.isRequired,
    onMenuClose: PropTypes.func.isRequired,
    onMenuOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    authLinks: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    }
  }

  render() {
    const {
      authLinks,
      onCartClose,
      onCartOpen,
      onMenuClose,
      onMenuOpen,
      open,
    } = this.props;

    return (
      <styled.Wrapper open={open}>
        <Navigation
          hideCart
          light
          menuOpen={open}
          onCartClose={onCartClose}
          onCartOpen={onCartOpen}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
        />
        <styled.Links>
          <styled.NavLink to="/products" onClick={onMenuClose} partiallyActive>
            <H300>Products</H300>
          </styled.NavLink>
          <styled.NavLink to="/stories" onClick={onMenuClose} partiallyActive>
            <H300>Stories</H300>
          </styled.NavLink>
          <styled.NavLink to="/search" onClick={onMenuClose}>
            <H300>Search</H300>
          </styled.NavLink>
          <styled.NavLink to="/contact" onClick={onMenuClose}>
            <H300>Contact</H300>
          </styled.NavLink>
        </styled.Links>
        <styled.Footer>
          {authLinks.map(authLink => (
            <Link key={authLink.name} to={authLink.href} onClick={onMenuClose}>
              <H500>{authLink.name}</H500>
            </Link>
          ))}
        </styled.Footer>
      </styled.Wrapper>
    );
  }
}

export default MobileMenu;
