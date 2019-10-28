import React, { Component } from 'react';
import { navigate } from 'gatsby';
import get from 'lodash/get';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import format from 'date-fns/format';

import StoreContext from '@context/StoreContext';
import {
  addAddress,
  deleteAddress,
  getCustomer,
  setDefaultAddress,
  updateAddress,
} from '@utils/shopify';
import getPrice from '@utils/price';
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
    addressForm: {},
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

  handleUpdateAddress = async (data, setDefault) => {
    const { addressForm } = this.state;
    const addressId = get(addressForm, 'values.id');

    const { addressId: newAddressId } = await updateAddress(data, addressId);

    if (setDefault) {
      await setDefaultAddress(newAddressId);
    }

    const customer = await getCustomer();
    this.context.setCustomer(customer);
    this.setState({ customer });

    this.handleCloseAddressForm();
  };

  handleDeleteAddress = async addressId => {
    await deleteAddress(addressId);

    const customer = await getCustomer();
    this.context.setCustomer(customer);
    this.setState({ customer });
  };

  handleCloseAddressForm = () => {
    enableBodyScroll();
    this.setState({ addressForm: {} });
  };

  handleOpenAddressForm = values => {
    disableBodyScroll();
    this.setState({
      addressForm: {
        open: true,
        values,
      },
    });
  };

  render() {
    const { location } = this.props;
    const { customer, loading, addressForm } = this.state;

    if (loading) {
      return (
        <styled.Loading>
          <H200>Loading...</H200>
        </styled.Loading>
      );
    }

    if (!customer && location.pathname !== '/signin') {
      navigate('/signin');
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
                customer.orders.edges.map(({ node }) => (
                  <styled.Order key={node.id}>
                    <span>#{node.orderNumber}</span>
                    <span>{format(new Date(node.processedAt), 'MM/d/yy')}</span>
                    <a
                      href={node.statusUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Status
                    </a>
                    <H500>{getPrice(node.totalPrice)}</H500>
                  </styled.Order>
                ))
              ) : (
                <Body>You haven't placed any orders yet.</Body>
              )}
            </div>
          </styled.Section>
          <styled.Section>
            <styled.SectionHeader>
              <H400>Address Book</H400>
              <Button
                size="small"
                theme="light"
                onClick={this.handleOpenAddressForm}
              >
                Add address <Icon name="plus" />
              </Button>
            </styled.SectionHeader>
            {get(customer, 'addresses.edges.length') ? (
              <styled.Addresses>
                {customer.addresses.edges.map(({ node }) => (
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
                    <Body>{node.country}</Body>
                    <Body>{node.phone}</Body>
                    <styled.AddressActions>
                      <Button
                        theme="text"
                        onClick={() => {
                          this.handleOpenAddressForm(node);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        theme="text_danger"
                        onClick={() => {
                          this.handleDeleteAddress(node.id.toString());
                        }}
                      >
                        Remove
                      </Button>
                    </styled.AddressActions>
                  </styled.Address>
                ))}
              </styled.Addresses>
            ) : (
              <Body>You haven't added any addresses yet.</Body>
            )}
          </styled.Section>
        </styled.Wrapper>
        <Drawer open={Boolean(addressForm.open)} title="Add Address">
          {addressForm.open && (
            <AddressForm
              initialValues={addressForm.values}
              onCancel={this.handleCloseAddressForm}
              onSubmit={
                get(addressForm, 'values.id')
                  ? this.handleUpdateAddress
                  : this.handleAddAddress
              }
            />
          )}
        </Drawer>
      </>
    );
  }
}

export default AccountPage;
