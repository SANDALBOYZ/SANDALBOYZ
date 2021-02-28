import React, { Component, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import StoreContext from '@context/StoreContext';
import getPrice from '@utils/price';
import { gtag } from '@utils/seo';

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

    const selectedOptionName = get(lineItem, 'variant.selectedOptions[0].name');
    const selectedOptionValue = get(
      lineItem,
      'variant.selectedOptions[0].value'
    );

    return (
      <styled.LineItem key={lineItem.id.toString()}>
        <styled.LineItemImage image={get(lineItem, 'variant.image.src')} />
        <styled.Info>
          <styled.Left>
            <styled.ProductDetailsContainer>
              <styled.ProductDetailLine>
                {get(lineItem, 'title')}
              </styled.ProductDetailLine>
              <styled.ProductDetailLine>
                {selectedOptionName} {selectedOptionValue}
              </styled.ProductDetailLine>
              <styled.ProductDetailLine>
                {getPrice(get(lineItem, 'variant.price'))}
              </styled.ProductDetailLine>
            </styled.ProductDetailsContainer>
            <styled.Remove onClick={this.handleRemove}>Remove</styled.Remove>
          </styled.Left>
          <Dropdown
            onChange={this.handleQuantityChange}
            options={[...Array(10)].map((_, idx) => ({
              name: `${idx + 1}`,
              value: idx + 1,
            }))}
            value={quantity}
            showIcon={false}
          />
        </styled.Info>
      </styled.LineItem>
    );
  }
}

function LineItem2({ lineItem }) {
  const { checkout, client, updateLineItem, removeLineItem } = useContext(
    StoreContext
  );

  const [quantity, setQuantity] = useState(lineItem.quantity);

  useEffect(() => {
    updateLineItem(client, checkout.id, lineItem.id, quantity);
  }, [quantity]);

  const selectedOptionName = get(lineItem, 'variant.selectedOptions[0].name');
  const selectedOptionValue = get(lineItem, 'variant.selectedOptions[0].value');

  const handleRemove = () => {
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

  return (
    <styled.LineItem key={lineItem.id.toString()}>
      <styled.LineItemImage image={get(lineItem, 'variant.image.src')} />
      <styled.Info>
        <styled.Left>
          <styled.ProductDetailsContainer>
            <styled.ProductDetailLine>
              {get(lineItem, 'title')}
            </styled.ProductDetailLine>
            <styled.ProductDetailLine>
              {selectedOptionName} {selectedOptionValue}
            </styled.ProductDetailLine>
            <styled.ProductDetailLine>
              {getPrice(get(lineItem, 'variant.price'))}
            </styled.ProductDetailLine>
          </styled.ProductDetailsContainer>
          <styled.Remove onClick={handleRemove}>Remove</styled.Remove>
        </styled.Left>
        <Dropdown
          onChange={quantity => setQuantity(quantity)}
          options={[...Array(10)].map((_, idx) => ({
            name: `${idx + 1}`,
            value: idx + 1,
          }))}
          value={quantity}
          showIcon={false}
        />
      </styled.Info>
    </styled.LineItem>
  );
}

export default LineItem2;
