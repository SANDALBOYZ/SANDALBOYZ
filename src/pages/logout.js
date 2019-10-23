import { Component } from 'react';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';

import StoreContext from '@context/StoreContext';

class Logout extends Component {
  static contextType = StoreContext;

  componentDidMount() {
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
