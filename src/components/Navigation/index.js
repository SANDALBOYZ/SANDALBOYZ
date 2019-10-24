import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileMenuToggle from '@components/MobileMenuToggle';
import * as styled from './styles';

class Navigation extends Component {
  static propTypes = {
    animate: PropTypes.bool,
    authLinks: PropTypes.array,
    cartOpen: PropTypes.bool,
    hideCart: PropTypes.bool,
    light: PropTypes.bool,
    menuOpen: PropTypes.bool.isRequired,
    onCartClose: PropTypes.func.isRequired,
    onCartOpen: PropTypes.func.isRequired,
    onMenuClose: PropTypes.func.isRequired,
    onMenuOpen: PropTypes.func,
  };

  static defaultProps = {
    authLinks: [],
  };

  constructor() {
    super();

    this.navRef = React.createRef();
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    if (this.props.animate) {
      this.scrollTicking = false;
      this.navHeight = this.navRef.current.offsetHeight;

      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    }
  }

  handleScroll = () => {
    if (!this.scrollTicking) {
      this.scrollTicking = true;
      requestAnimationFrame(this.update);
    }
  };

  handleResize = () => {
    if (!this.resizeTicking) {
      this.resizeTicking = true;
      requestAnimationFrame(this.setHeightOffset);
    }
  };

  setHeightOffset = () => {
    this.navHeight = this.navRef.current.offsetHeight;
    this.resizeTicking = false;
  };

  update = () => {
    if (window.pageYOffset > this.navRef.current.offsetHeight) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }

    this.scrollTicking = false;
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const {
      authLinks,
      cartOpen,
      hideCart,
      light,
      menuOpen,
      onCartClose,
      onCartOpen,
      onMenuClose,
      onMenuOpen,
    } = this.props;
    const { hasScrolled } = this.state;

    let toggleFunction = menuOpen ? onMenuClose : onMenuOpen;

    if (cartOpen) {
      toggleFunction = onCartClose;
    }

    return (
      <styled.Nav
        cartOpen={cartOpen}
        light={light && !hasScrolled}
        ref={this.navRef}
        hasScrolled={hasScrolled}
      >
        <styled.Container>
          <styled.NavSection>
            <styled.LogoLink to="/" aria-label="SANDALBOYZ">
              <styled.Logo
                cartOpen={cartOpen}
                light={light && !hasScrolled}
              />
            </styled.LogoLink>
            <styled.NavLink to="/products" partiallyActive>
              Products
            </styled.NavLink>
            <styled.NavLink to="/stories" partiallyActive>
              Stories
            </styled.NavLink>
            <styled.NavLink to="/contact">Contact</styled.NavLink>
          </styled.NavSection>
          <styled.NavSection>
            <styled.NavLink to="/search" alt="Search">
              <styled.Icon
                name="search"
                light={light && !hasScrolled}
              />
            </styled.NavLink>
            {!hideCart && (
              <styled.MobileNavLink onClick={onCartOpen}>
                <styled.Icon
                  name="briefcase"
                  light={light && !hasScrolled}
                />
              </styled.MobileNavLink>
            )}
            <MobileMenuToggle
              light={light && !cartOpen && !hasScrolled}
              open={cartOpen || menuOpen}
              onClick={toggleFunction}
            />
            {authLinks.map(authLink => (
              <styled.NavLink key={authLink.name} to={authLink.href}>
                {authLink.name}
              </styled.NavLink>
            ))}
          </styled.NavSection>
        </styled.Container>
      </styled.Nav>
    );
  }
}

export default Navigation;
