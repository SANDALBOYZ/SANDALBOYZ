import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import getPrice from '@utils/price';
import { Body } from '@utils/type';
import StoreContext from '@context/StoreContext';
import Input from '@components/formElements/Input';
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

  handleQuantityChange = evt => {
    this.setState({ quantity: evt.target.value });
  };

  handleRemove = () => {
    const { checkout, client, removeLineItem } = this.context;
    const { id } = this.props.lineItem;

    removeLineItem(client, checkout.id, id);
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
          <styled.H500>
            <span>{get(lineItem, 'title')}</span>
            <span>{getPrice(get(lineItem, 'variant.price'))}</span>
          </styled.H500>
          <styled.Actions>
            <div>
              {size && <Body>Size {size}</Body>}
              <styled.Remove onClick={this.handleRemove}>
                Remove
              </styled.Remove>
            </div>
            <Input
              min={1}
              max={9}
              name="quantity"
              onChange={this.handleQuantityChange}
              type="number"
              value={quantity}
            />
          </styled.Actions>
        </styled.Info>
      </styled.LineItem>
    );
  }
}

export default LineItem;
