import React, { Component } from 'react';
import get from 'lodash/get';

import { H400 } from '@utils/type';
import StoreContext from '@context/StoreContext';
import Button from '@components/Button';
import Header from '@components/Header';
import Icon from '@components/Icon';
import * as styled from './styles';

class AccountPage extends Component {
  static contextType = StoreContext;

  render() {
    const { customer } = this.context;

    return (
      <>
        <Header label="My account" title="Welcome back" />
        <styled.Wrapper>
          <styled.Section>
            <styled.SectionHeader>
              <H400>Order History</H400>
            </styled.SectionHeader>
            <div>
              {get(customer, 'orders.edges', []).map(({ node }) => (
                <styled.Order>
                  {node.orderNumber}
                </styled.Order>
              ))}
            </div>
          </styled.Section>
          <styled.Section>
            <styled.SectionHeader>
              <H400>Address Book</H400>
              <Button theme="light">
                Add address <Icon name="plus" />
              </Button>
            </styled.SectionHeader>
            <styled.Addresses></styled.Addresses>
          </styled.Section>
        </styled.Wrapper>
      </>
    );
  }
}

export default AccountPage;
