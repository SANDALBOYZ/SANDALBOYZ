import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import get from 'lodash/get';

import StoreContext from '@context/StoreContext';
import { gtag } from '@utils/seo';
import { associateCheckout } from '@utils/shopify';
import { Body } from '@utils/type';

import Drawer from '@components/Drawer';
import LineItem from './LineItem';
import * as styled from './styles';

function Cart({ open, onClose }) {
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
        <styled.SubtotalContainer>
          <styled.Subtotal>Subtotal</styled.Subtotal>
          <styled.Price>${checkout.subtotalPrice}</styled.Price>
        </styled.SubtotalContainer>
      ) : (
        <styled.Empty>
          <Body>Your bag is empty.</Body>
          <Body>Add some sandals so we can send you something nice.</Body>
        </styled.Empty>
      )}
    </Drawer>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Cart;
