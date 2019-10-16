import React from 'react';
import { Router } from '@reach/router';

import Head from '@utils/seo';
import AccountPage from '@components/AccountPage';
import PrivateRoute from '@components/PrivateRoute';

const AccountPageWrapper = () => (
  <>
    <Head title="Account" />
    <Router>
      <PrivateRoute path="/account" component={AccountPage} />
    </Router>
  </>
);

export default AccountPageWrapper;
