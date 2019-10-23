import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

import StoreContext, { defaultStoreContext } from '@context/StoreContext';
import { GlobalStyle } from '@utils/styles';
import Cart from '@components/Cart';
import Footer from '@components/Footer/container';
import MobileMenu from '@components/MobileMenu';
import Navigation from '@components/Navigation';

class Layout extends React.Component {
  state = {
    cartOpen: false,
    menuOpen: false,
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        if (variantId === '' || !quantity) {
          console.error('Both a size and quantity are required.');
          return;
        }

        this.setState(state => ({
          cartOpen: true,
          store: {
            ...state.store,
            adding: true,
          },
        }));

        const { checkout, client } = this.state.store;
        const checkoutId = checkout.id;
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ];

        return client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout,
                adding: false,
              },
            }));
          });
      },
      closeMobileMenu: this.handleMenuClose,
      removeLineItem: (client, checkoutID, lineItemID) => {
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }));
          });
      },
      updateLineItem: (client, checkoutID, lineItemID, quantity) => {
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ];

        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }));
          });
      },
      setCustomer: customer => {
        this.setState(state => ({
          store: {
            ...state.store,
            customer,
          },
        }));
      },
    },
  };

  async initializeCheckout() {
    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined';
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null;

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id);
      }

      this.setState(state => ({
        store: {
          ...state.store,
          checkout,
        },
      }));
    };

    const createNewCheckout = () => this.state.store.client.checkout.create();
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id);

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID);

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout);
          return;
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null);
      }
    }

    const newCheckout = await createNewCheckout();
    setCheckoutInState(newCheckout);
  }

  componentDidMount() {
    this.initializeCheckout();
  }

  componentDidUpdate(prevProps) {
    const { path } = this.props;

    if (path !== prevProps.path) {
      this.setState({
        cartOpen: false,
        menuOpen: false,
      });
    }
  }

  getNavLight = () => {
    const { location } = this.props;
    const lightPaths = [
      '/forgot',
      '/forgot/',
      '/signin',
      '/signin/',
      '/register',
      '/register/',
      '/reset',
      '/reset/',
      '/stories',
      '/stories/',
    ];

    return lightPaths.includes(location.pathname);
  };

  handleCartClose = () => {
    this.setState({ cartOpen: false });
  };

  handleCartOpen = () => {
    this.setState({ cartOpen: true });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };

  shouldShowLogout = () => {
    const { location } = this.props;
    const { store } = this.state;

    return get(store, 'customer.id') && location.pathname === '/account';
  };

  render() {
    const { children } = this.props;

    return (
      <StoreContext.Provider value={this.state.store}>
        <GlobalStyle />
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Navigation
                animate
                cartOpen={this.state.cartOpen}
                hideCart={this.state.cartOpen}
                light={this.getNavLight()}
                menuOpen={this.state.menuOpen}
                onCartClose={this.handleCartClose}
                onCartOpen={this.handleCartOpen}
                onMenuClose={this.handleMenuClose}
                onMenuOpen={this.handleMenuOpen}
                showLogout={this.shouldShowLogout()}
              />
              <MobileMenu
                onCartClose={this.handleCartClose}
                onCartOpen={this.handleCartOpen}
                onMenuClose={this.handleMenuClose}
                onMenuOpen={this.handleMenuOpen}
                open={this.state.menuOpen}
                showLogout={this.shouldShowLogout()}
              />
              <Cart open={this.state.cartOpen} onClose={this.handleCartClose} />
              {children}
              <Footer />
            </>
          )}
        />
      </StoreContext.Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
