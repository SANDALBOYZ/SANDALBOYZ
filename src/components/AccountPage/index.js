import React, { Component } from 'react';
import { navigate } from 'gatsby';
import get from 'lodash/get';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import StoreContext from '@context/StoreContext';
import { addAddress, getCustomer, setDefaultAddress } from '@utils/customer';
import { Body, H200, H400, H500 } from '@utils/type';
import AddressForm from '@components/AddressForm';
import Button from '@components/Button';
import Drawer from '@components/Drawer';
import Header from '@components/Header';
import Icon from '@components/Icon';
import * as styled from './styles';

class AccountPage extends Component {
  static contextType = StoreContext;

  state = {
    customer: null,
    loading: true,
    showAddressForm: false,
  };

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    const customer = await getCustomer();

    if (get(customer, 'id')) {
      this.context.setCustomer(customer);
      this.setState({ customer, loading: false });
    } else {
      this.setState({ loading: false });
    }
  };

  handleAddAddress = async (data, setDefault) => {
    const { addressId } = await addAddress(data);

    if (setDefault) {
      await setDefaultAddress(addressId);
    }

    const customer = await getCustomer();
    this.context.setCustomer(customer);
    this.setState({ customer });

    this.handleCloseAddressForm();
  };

  handleCloseAddressForm = () => {
    enableBodyScroll();
    this.setState({ showAddressForm: false });
  };

  handleOpenAddressForm = () => {
    disableBodyScroll();
    this.setState({ showAddressForm: true });
  };

  render() {
    const { location } = this.props;
    const { customer, loading, showAddressForm } = this.state;

    if (loading) {
      return (
        <styled.Loading>
          <H200>Loading...</H200>
        </styled.Loading>
      );
    }

    if (!customer && location.pathname !== '/login') {
      navigate('/login');
      return null;
    }

    return (
      <>
        <Header label="My account" title="Welcome back" />
        <styled.Wrapper>
          <styled.Section>
            <styled.SectionHeader>
              <H400>Order History</H400>
            </styled.SectionHeader>
            <div>
              {get(customer, 'orders.edges.length') ? (
                customer.order.edges.map(({ node }) => (
                  <styled.Order key={node.id}>{node.orderNumber}</styled.Order>
                ))
              ) : (
                <Body>You haven't placed any orders yet.</Body>
              )}
            </div>
          </styled.Section>
          <styled.Section>
            <styled.SectionHeader>
              <H400>Address Book</H400>
              <Button size="small" theme="light" onClick={this.handleOpenAddressForm}>
                Add address <Icon name="plus" />
              </Button>
            </styled.SectionHeader>
            <styled.Addresses>
              {get(customer, 'addresses.edges.length') ? (
                customer.addresses.edges.map(({ node }) => (
                  <styled.Address key={node.id}>
                    <H500>
                      {node.firstName} {node.lastName}
                    </H500>
                    <Body>
                      {node.address1} {node.address2}
                    </Body>
                    <Body>
                      {node.city}, {node.province}
                    </Body>
                    <Body>
                      {node.country}
                    </Body>
                    <Body>
                      {node.phone}
                    </Body>
                    <styled.AddressActions>
                      <Button theme="text">
                        Edit
                      </Button>
                      <Button theme="text_danger">
                        Remove
                      </Button>
                    </styled.AddressActions>
                  </styled.Address>
                ))
              ) : (
                <Body>You haven't added any addresses yet.</Body>
              )}
            </styled.Addresses>
          </styled.Section>
        </styled.Wrapper>
        <Drawer open={showAddressForm} title="Add Address">
          <AddressForm
            onCancel={this.handleCloseAddressForm}
            onSubmit={this.handleAddAddress}
          />
        </Drawer>
      </>
    );
  }
}

export default AccountPage;
