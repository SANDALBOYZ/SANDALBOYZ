import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import get from 'lodash/get';

import StoreContext from '@context/StoreContext';

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.any.isRequired,
  };

  static contextType = StoreContext;

  render() {
    const { component: Component, location, ...rest } = this.props;
    const { customer } = this.context;

    if (get(customer, 'loading')) {
      return 'Loading...';
    }

    if (!get(customer, 'id') && location.pathname !== '/login') {
      navigate('/login');
      return null;
    }

    return <Component {...rest} />;
  }
}

export default PrivateRoute;
