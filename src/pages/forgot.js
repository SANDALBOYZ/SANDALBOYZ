import React from 'react';

import Head from '@utils/seo';
import Header from '@components/Header';
import ForgotForm from '@components/AuthForm/Forgot';

const ForgotPage = () => (
  <>
    <Head title="Forgot Password" />
    <Header label="Forgot Password" shrinkOnMobile theme="dark" title="Reset your password" />
    <ForgotForm />
  </>
);

export default ForgotPage;
