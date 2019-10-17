import React from 'react';

import Head from '@utils/seo';
import AccountPage from '@components/AccountPage';

const AccountPageWrapper = ({ location }) => (
  <>
    <Head title="Account" />
    <AccountPage location={location} />
  </>
);

export default AccountPageWrapper;
