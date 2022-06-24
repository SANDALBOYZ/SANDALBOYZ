import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import StoreContext from '@context/StoreContext';
import { gtag } from '@utils/seo';
import { associateCheckout } from '@utils/shopify';
import { Body } from '@utils/type';
import { useBodyScrollLock, useHideZeWidget } from '@utils/hooks';

import Button2 from '@components/Button2';
import Drawer from '@components/Drawer';
import LineItem from './LineItem';
import * as styled from './styles';

function Cart({ open, onClose }) {
  const context = useContext(StoreContext);

  const { checkout, adding, customer } = context;

  useBodyScrollLock(open);
  useHideZeWidget(open);

  const handleCheckout = async () => {
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

  const subtotalPrice = get(checkout, 'subtotalPrice', 0);

  const freeShippingText =
    100 - subtotalPrice > 0
      ? `Spend $${(100 - subtotalPrice).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} more to get free shipping.`
      : 'Free shipping unlocked ✅';

  return (
    <Drawer onClose={onClose} open={open} loading={adding}>
      <styled.CartContainer>
        <styled.H3>Bag</styled.H3>
        {checkout.lineItems.map((lineItem) => (
          <LineItem key={lineItem.id.toString()} lineItem={lineItem} />
        ))}
        {checkout.lineItems.length === 0 && (
          <styled.Empty>
            <Body>Your bag is empty.</Body>
            <Body>Add some sandals so we can send you something nice.</Body>
          </styled.Empty>
        )}
      </styled.CartContainer>
      <styled.Actions>
        {/* <styled.CheckoutText>
          Free shipping on purchases of $100 or more.
        </styled.CheckoutText> */}
        <styled.CheckoutText>{freeShippingText}</styled.CheckoutText>
        <styled.SubtotalContainer>
          <styled.Subtotal>Subtotal</styled.Subtotal>
          <styled.Price>${subtotalPrice}</styled.Price>
        </styled.SubtotalContainer>
        <Button2
          disabled={adding || checkout.lineItems.length === 0}
          external
          fullWidth
          onClick={handleCheckout}
        >
          Checkout
        </Button2>
      </styled.Actions>
    </Drawer>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Cart;
