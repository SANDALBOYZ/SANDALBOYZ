import axios from 'axios';
import get from 'lodash/get';
import Cookies from 'js-cookie';

const apiUrl = `https://${process.env.GATSBY_SHOP_NAME}.myshopify.com/api/${process.env.GATSBY_SHOPIFY_API_VERSION}/graphql`;
const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
};
const isBrowser = typeof window !== 'undefined';

export const getCustomer = async () => {
  if (!isBrowser) return false;

  const customer = await getCustomerQuery();
  return customer;
};

export const getCustomerQuery = () =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        query customer($customerAccessToken: String!) {
          customer(customerAccessToken: $customerAccessToken) {
            id
            firstName
            addresses(first: 10) {
              edges {
                node {
                  id
                  address1
                  address2
                  city
                  country
                  firstName
                  lastName
                  phone
                  province
                  provinceCode
                  zip
                }
              }
            }
            orders(sortKey: PROCESSED_AT, first: 20) {
              edges {
                node {
                  id
                  orderNumber
                  processedAt
                  statusUrl
                  totalPrice
                }
              }
            }
          }
        }
      `,
      variables: { customerAccessToken: Cookies.get('_sb_access_token') },
    },
  }).then(({ data }) => {
    return get(data, 'data.customer');
  });

export const associateCheckout = checkoutId =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
          checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
            checkout {
              id
            }
            checkoutUserErrors {
              field
              message
            }
            customer {
              id
            }
          }
        }
      `,
      variables: {
        customerAccessToken: Cookies.get('_sb_access_token'),
        checkoutId,
      },
    },
  }).then(({ data }) => ({
    checkoutId: get(data, 'data.checkoutCustomerAssociateV2.checkout.id'),
  }));

export const disassociateCheckout = checkoutId =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation checkoutCustomerDisassociateV2($checkoutId: ID!) {
          checkoutCustomerDisassociateV2(checkoutId: $checkoutId) {
            checkout {
              id
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `,
      variables: {
        checkoutId,
      },
    },
  }).then(({ data }) => ({
    checkoutId: get(data, 'data.checkoutCustomerDisassociateV2.checkout.id'),
  }));

export const addAddress = address =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
          customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
            userErrors {
              field
              message
            }
            customerAddress {
              id
            }
          }
        }
      `,
      variables: {
        customerAccessToken: Cookies.get('_sb_access_token'),
        address,
      },
    },
  }).then(({ data }) => ({
    addressId: get(data, 'data.customerAddressCreate.customerAddress.id'),
  }));

export const updateAddress = (newAddress, addressId) =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
          customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
            userErrors {
              field
              message
            }
            customerAddress {
              id
            }
          }
        }
      `,
      variables: {
        customerAccessToken: Cookies.get('_sb_access_token'),
        id: addressId,
        address: newAddress,
      },
    },
  }).then(({ data }) => ({
    addressId: get(data, 'data.customerAddressUpdate.customerAddress.id'),
  }));

export const deleteAddress = addressId =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
          customerAddressDelete(id: $id, customerAccessToken: $customerAccessToken) {
            customerUserErrors {
              code
              field
              message
            }
            deletedCustomerAddressId
          }
        }
      `,
      variables: {
        customerAccessToken: Cookies.get('_sb_access_token'),
        id: addressId,
      },
    },
  }).then(({ data }) => ({
    addressId: get(data, 'data.customerAddressDelete.deletedCustomerAddressId'),
  }));

export const setDefaultAddress = addressId =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerDefaultAddressUpdate($customerAccessToken: String!, $addressId: ID!) {
          customerDefaultAddressUpdate(customerAccessToken: $customerAccessToken, addressId: $addressId) {
            userErrors {
              field
              message
            }
            customer {
              id
            }
          }
        }
      `,
      variables: {
        customerAccessToken: Cookies.get('_sb_access_token'),
        addressId,
      },
    },
  }).then(({ data }) => ({
    customer: get(data, 'data.customerDefaultAddressUpdate.customer'),
  }));

export const register = input =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerCreate($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            userErrors {
              field
              message
            }
            customer {
              id
            }
          }
        }
      `,
      variables: { input },
    },
  }).then(({ data }) => ({
    customer: get(data, 'data.customerCreate.customer'),
    errors: get(data, 'errors'),
    userErrors: get(data, 'data.customerCreate.userErrors'),
  }));

export const signin = input =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
          customerAccessTokenCreate(input: $input) {
            userErrors {
              field
              message
            }
            customerAccessToken {
              accessToken
              expiresAt
            }
          }
        }
      `,
      variables: { input },
    },
  }).then(({ data }) => ({
    accessToken: get(
      data,
      'data.customerAccessTokenCreate.customerAccessToken.accessToken'
    ),
    expiresAt: get(
      data,
      'data.customerAccessTokenCreate.customerAccessToken.expiresAt'
    ),
    errors: get(data, 'errors'),
    userErrors: get(data, 'data.customerAccessTokenCreate.userErrors'),
  }));

export const forgot = email =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerRecover($email: String!) {
          customerRecover(email: $email) {
            customerUserErrors {
              code
              field
              message
            }
          }
        }
      `,
      variables: { email },
    },
  }).then(({ data }) => ({
    errors: get(data, 'errors'),
    userErrors: get(data, 'data.customerRecover.customerUserErrors'),
  }));

export const reset = (id, input) =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        mutation customerReset($input: CustomerResetInput!) {
          customerReset(id: "${id}", input: $input) {
            customer {
              id
            }
            customerAccessToken {
              accessToken
              expiresAt
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: { input },
    },
  }).then(({ data }) => ({
    accessToken: get(
      data,
      'data.customerReset.customerAccessToken.accessToken'
    ),
    expiresAt: get(data, 'data.customerReset.customerAccessToken.expiresAt'),
    errors: get(data, 'errors'),
    userErrors: get(data, 'data.customerReset.customerUserErrors'),
  }));

export const getSortedProductIds = (sortKey, reverse) =>
  axios({
    url: apiUrl,
    method: 'post',
    headers: commonHeaders,
    data: {
      query: `
        query productsQuery($sortKey: ProductSortKeys!, $reverse: Boolean) {
          products(sortKey: $sortKey, reverse: $reverse, first: 250) {
            edges {
              node {
                id
              }
            }
          }
        }
      `,
      variables: { sortKey, reverse },
    },
  }).then(({ data }) => ({
    sortedProductIds: get(data, 'data.products.edges', []).map(({ node }) => `Shopify__Product__${node.id}`),
  }));
