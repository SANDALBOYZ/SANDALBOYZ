import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import getPrice from '@utils/price';
import { Body } from '@utils/type';
import { gtag } from '@utils/seo';
import StoreContext from '@context/StoreContext';
import Dropdown from '@components/Dropdown';
import * as styled from './styles';

class LineItem extends Component {
  static propTypes = {
    lineItem: PropTypes.object.isRequired,
  };

  static contextType = StoreContext;

  constructor(props) {
    super(props);

    this.state = {
      quantity: props.lineItem.quantity,
    };
  }

  handleQuantityChange = quantity => {
    this.setState({ quantity }, this.handleUpdate);
  };

  handleRemove = () => {
    const { checkout, client, removeLineItem } = this.context;
    const { lineItem } = this.props;

    gtag('event', 'remove_from_cart', {
      items: [
        {
          id: get(lineItem, 'variant.sku'),
          name: get(lineItem, 'title'),
          brand: 'SANDALBOYZ',
          // category: 'Apparel/T-Shirts',
          variant: get(lineItem, 'variant.title'),
          // list_position: 1,
          quantity: get(lineItem, 'quantity'),
          price: get(lineItem, 'variant.price'),
        },
      ],
    });

    removeLineItem(client, checkout.id, lineItem.id);
  };

  handleUpdate = () => {
    const { quantity } = this.state;
    const { checkout, client, updateLineItem } = this.context;
    const { id } = this.props.lineItem;

    updateLineItem(client, checkout.id, id, quantity);
  };

  render() {
    const { lineItem } = this.props;
    const { quantity } = this.state;

    console.log('\n\n\nlineItem.variant.product')
    console.log(lineItem.variant.product.productType)

    const size = get(
      get(lineItem, 'variant.selectedOptions', []).find(
        option => option.name === 'Size'
      ),
      'value'
    );

    return (
      <styled.LineItem key={lineItem.id.toString()}>
        <styled.LineItemImage image={get(lineItem, 'variant.image.src')} />
        <styled.Info>
          <styled.ProductDetailsContainer>
            <styled.ProductDetailLine>{get(lineItem, 'title')}</styled.ProductDetailLine>
            <styled.ProductDetailLine>{get(lineItem, 'variant.product.productType')}</styled.ProductDetailLine>
            <styled.ProductDetailLine>{getPrice(get(lineItem, 'variant.price'))}</styled.ProductDetailLine>
          </styled.ProductDetailsContainer>
          <styled.Actions>
            <div>
              {size && <Body>Size {size}</Body>}
              <styled.Remove onClick={this.handleRemove}>Remove</styled.Remove>
            </div>
            <Dropdown
              onChange={this.handleQuantityChange}
              options={[...Array(10)].map((_, idx) => ({
                name: `${idx + 1}`,
                value: idx + 1,
              }))}
              value={quantity}
              showIcon={false}
            />
          </styled.Actions>
        </styled.Info>
      </styled.LineItem>
    );
  }
}

export default LineItem;
