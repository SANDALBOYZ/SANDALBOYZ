import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { H300, H500 } from '@utils/type';
import Navigation from '@components/Navigation';
import * as styled from './styles';

class MobileMenu extends Component {
  static propTypes = {
    onCartOpen: PropTypes.func.isRequired,
    onMenuClose: PropTypes.func.isRequired,
    onMenuOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

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
    const { onCartOpen, onMenuClose, onMenuOpen, open } = this.props;

    return (
      <styled.Wrapper open={open}>
        <Navigation
          hideCart
          light
          menuOpen={open}
          onCartOpen={onCartOpen}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
        />
        <styled.Links>
          <Link to="/products" onClick={onMenuClose}>
            <H300>Products</H300>
          </Link>
          <Link to="/stories" onClick={onMenuClose}>
            <H300>Stories</H300>
          </Link>
          <Link to="/search" onClick={onMenuClose}>
            <H300>Search</H300>
          </Link>
          <Link to="/contact" onClick={onMenuClose}>
            <H300>Contact</H300>
          </Link>
        </styled.Links>
        <styled.Footer>
          <Link to="/login" onClick={onMenuClose}>
            <H500>Login</H500>
          </Link>
        </styled.Footer>
      </styled.Wrapper>
    );
  }
}

export default MobileMenu;
