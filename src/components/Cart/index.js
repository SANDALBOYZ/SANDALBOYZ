import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { Body, H300 } from '@utils/type';
import StoreContext from '@context/StoreContext';
import Drawer from '@components/Drawer';
import LineItem from './LineItem';

import * as styled from './styles';

class Cart extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  static contextType = StoreContext;

  constructor() {
    super();

    this.scrollable = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        disableBodyScroll(this.scrollable.current);
      } else {
        enableBodyScroll(this.scrollable.current);
      }
    }
  }

  render() {
    const { onClose, open } = this.props;
    const { checkout } = this.context;

    return (
      <Drawer
        actions={{
          close: {
            name: 'Continue shopping',
          },
          next: {
            disabled: !checkout.lineItems.length,
            name: 'Proceed to checkout',
            href: checkout.webUrl,
          },
        }}
        onClose={onClose}
        open={open}
        ref={this.scrollable}
        title="Your cart"
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
            <Body>Nothing here yet</Body>
          </styled.Empty>
        )}
      </Drawer>
    );
  }
}

export default Cart;
