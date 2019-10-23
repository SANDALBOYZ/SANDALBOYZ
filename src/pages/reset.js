import React from 'react';
import qs from 'querystringify';
import get from 'lodash/get';

import Head from '@utils/seo';
import Header from '@components/Header';
import ResetForm from '@components/AuthForm/Reset';

const ResetPage = ({ location }) => (
  <>
    <Head title="Reset Password" />
    <Header shrinkOnMobile theme="dark" title="Reset your password" />
    <ResetForm id={get(qs.parse(location.search), 'id')} token={get(qs.parse(location.search), 'token')} />
  </>
);

export default ResetPage;
