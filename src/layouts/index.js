import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import StoreContext, { defaultStoreContext } from '@context/StoreContext';
import { GlobalStyle } from '@utils/styles';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

class Layout extends React.Component {
  state = {
    menuOpen: false,
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        if (variantId === '' || !quantity) {
          console.error('Both a size and quantity are required.');
          return;
        }

        this.setState(state => ({
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

  getNavLight = () => {
    const { path } = this.props;
    const lightPaths = ['/stories/'];

    return lightPaths.includes(path);
  };

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
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
                light={this.getNavLight()}
                menuOpen={this.state.menuOpen}
                onMenuOpen={this.handleMenuOpen}
                onMenuClose={this.handleMenuClose}
              />
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
