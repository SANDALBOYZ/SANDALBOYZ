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
      navState: 'unfixed',
    };
  }

  componentDidMount() {
    if (this.props.animate) {
      this.currentScrollY = 0;
      this.lastKnownScrollY = 0;
      this.scrollTicking = false;
      this.resizeTicking = false;
      this.delta = 0;
      this.downTolerance = 0;
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

  getAction = () => {
    const { cartOpen } = this.props;
    const { navState } = this.state;

    const scrollDirection =
      this.currentScrollY >= this.lastKnownScrollY ? 'down' : 'up';
    const distanceScrolled = Math.abs(
      this.currentScrollY - this.lastKnownScrollY
    );

    if (cartOpen) {
      return 'none';
    } else if (this.currentScrollY <= this.delta && navState !== 'unfixed') {
      return 'unfix';
    } else if (
      this.currentScrollY <= this.navHeight &&
      scrollDirection === 'down' &&
      navState === 'unfixed'
    ) {
      return 'none';
    } else if (
      this.currentScrollY > this.navHeight + this.delta &&
      scrollDirection === 'down' &&
      navState === 'unfixed'
    ) {
      return 'unpin-snap';
    } else if (
      scrollDirection === 'down' &&
      ['pinned', 'unfixed'].indexOf(navState) >= 0 &&
      this.currentScrollY > this.navHeight + this.delta &&
      distanceScrolled > 0
    ) {
      return 'unpin';
    } else if (
      scrollDirection === 'up' &&
      distanceScrolled > 5 &&
      ['pinned', 'unfixed'].indexOf(navState) < 0
    ) {
      return 'pin';
    } else if (
      scrollDirection === 'up' &&
      this.currentScrollY <= this.navHeight &&
      ['pinned', 'unfixed'].indexOf(navState) < 0
    ) {
      return 'pin';
    } else {
      return 'none';
    }
  };

  update = () => {
    this.currentScrollY = window.pageYOffset;
    const action = this.getAction();

    if (action === 'pin') {
      this.setState({ navState: 'pinned' });
    } else if (action === 'unpin') {
      this.setState({ navState: 'unpinned' });
    } else if (action === 'unpin-snap') {
      this.setState({ navState: 'unpinned-snap' });
    } else if (action === 'unfix') {
      this.setState({ navState: 'unfixed' });
    }

    this.lastKnownScrollY = this.currentScrollY;
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
    const { navState } = this.state;

    let toggleFunction = menuOpen ? onMenuClose : onMenuOpen;

    if (cartOpen) {
      toggleFunction = onCartClose;
    }

    return (
      <styled.Nav
        cartOpen={cartOpen}
        light={light && navState !== 'pinned'}
        ref={this.navRef}
        state={navState}
      >
        <styled.Container>
          <styled.NavSection>
            <styled.LogoLink to="/" aria-label="SANDALBOYZ">
              <styled.Logo
                cartOpen={cartOpen}
                light={light && navState !== 'pinned'}
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
                light={light && navState !== 'pinned'}
              />
            </styled.NavLink>
            {!hideCart && (
              <styled.MobileNavLink onClick={onCartOpen}>
                <styled.Icon
                  name="briefcase"
                  light={light && navState !== 'pinned'}
                />
              </styled.MobileNavLink>
            )}
            <MobileMenuToggle
              light={light && !cartOpen && navState !== 'pinned'}
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
