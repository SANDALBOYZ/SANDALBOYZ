import React, { Component, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import get from 'lodash/get';

import { gtag } from '@utils/seo';
import { associateCheckout } from '@utils/shopify';
import { Body, H300 } from '@utils/type';
import StoreContext from '@context/StoreContext';
import sandal from '@images/sandal.svg';
import Drawer from '@components/Drawer';
import LineItem from './LineItem';

import * as styled from './styles';

class Cart extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  static contextType = StoreContext;

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    }
  }

  handleCheckout = async () => {
    const { checkout, customer } = this.context;

    if (get(customer, 'id')) {
      await associateCheckout(checkout.id);
    }

    if (get(checkout, 'id') && get(checkout, 'lineItems.length')) {
      gtag('event', 'begin_checkout', {
        items: checkout.lineItems.map(lineItem => ({
          id: lineItem.variant.sku,
          name: lineItem.title,
          brand: 'SANDALBOYZ',
          variant: lineItem.variant.title,
          quantity: lineItem.quantity,
          price: lineItem.variant.price,
        })),
      });
    }

    if (checkout.webUrl) {
      const url = checkout.webUrl.replace(
        `${process.env.GATSBY_SHOP_NAME}.myshopify`,
        'checkout.sandalboyz'
      );

      window.location.href = url;
    }
  };

  render() {
    const { onClose, open } = this.props;
    const { checkout, adding } = this.context;
    console.log('\n\nryan')
    console.log(checkout.lineItems)

    return (
      <Drawer
        actions={{
          close: {
            name: 'Continue shopping',
          },
          next: {
            disabled: !checkout.lineItems.length,
            name: 'Proceed to checkout',
            onClick: this.handleCheckout,
          },
        }}
        onClose={onClose}
        open={open}
        title="Bag"
        loading={adding}
      >
        {checkout.lineItems.map(lineItem => (
          <LineItem key={lineItem.id.toString()} lineItem={lineItem} />
        ))}
        {checkout.lineItems.length ? (
          <styled.Subtotal>
            <Body>Subtotal</Body>
            <H300>${checkout.subtotalPrice}</H300>
          </styled.Subtotal>
        ) : (
          <styled.Empty>
            <styled.Image src={sandal} />
            <styled.H300>Your cart is empty!</styled.H300>
            <Body>Go add some sandals so we can ship them to you!</Body>
          </styled.Empty>
        )}
      </Drawer>
    );
  }
}

function Cart2({ open, onClose }) {
  const context = useContext(StoreContext);

  const { checkout, adding } = context;

  useEffect(() => {
    if (open) {
      disableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  });

  const handleCheckout = async () => {
    const { checkout, customer } = this.context;

    if (get(customer, 'id')) {
      await associateCheckout(checkout.id);
    }

    if (get(checkout, 'id') && get(checkout, 'lineItems.length')) {
      gtag('event', 'begin_checkout', {
        items: checkout.lineItems.map(lineItem => ({
          id: lineItem.variant.sku,
          name: lineItem.title,
          brand: 'SANDALBOYZ',
          variant: lineItem.variant.title,
          quantity: lineItem.quantity,
          price: lineItem.variant.price,
        })),
      });
    }

    if (checkout.webUrl) {
      const url = checkout.webUrl.replace(
        `${process.env.GATSBY_SHOP_NAME}.myshopify`,
        'checkout.sandalboyz'
      );

      window.location.href = url;
    }
  };

  return (
    <Drawer
      actions={{
        close: {
          name: 'Continue shopping',
        },
        next: {
          disabled: !checkout.lineItems.length,
          name: 'Proceed to checkout',
          onClick: handleCheckout,
        },
      }}
      onClose={onClose}
      open={open}
      title="Bag"
      loading={adding}
    >
      {checkout.lineItems.map(lineItem => (
        <LineItem key={lineItem.id.toString()} lineItem={lineItem} />
      ))}
      {checkout.lineItems.length ? (
        <styled.Subtotal>
          <Body>Subtotal</Body>
          <H300>${checkout.subtotalPrice}</H300>
        </styled.Subtotal>
      ) : (
        <styled.Empty>
          <styled.Image src={sandal} />
          <styled.H300>Your cart is empty!</styled.H300>
          <Body>Go add some sandals so we can ship them to you!</Body>
        </styled.Empty>
      )}
    </Drawer>
  );
}

Cart2.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Cart;
