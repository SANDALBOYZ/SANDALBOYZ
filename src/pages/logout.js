import { Component } from 'react';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';
import get from 'lodash/get';

import { disassociateCheckout } from '@utils/shopify';
import StoreContext from '@context/StoreContext';

class Logout extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    disassociateCheckout(get(this.context, 'checkout.id'));
    this.context.setCustomer(null);
    Cookies.remove('_sb_access_token');
  }

  render() {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      navigate('/');
    }

    return null;
  }
}

export default Logout;
