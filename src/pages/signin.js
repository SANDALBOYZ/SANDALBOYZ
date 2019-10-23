import React from 'react';

import Head from '@utils/seo';
import Header from '@components/Header';
import SigninForm from '@components/AuthForm/Signin';

const SigninPage = () => (
  <>
    <Head title="Sign in" />
    <Header label="Sign In" shrinkOnMobile theme="dark" title="Welcome Back" />
    <SigninForm />
  </>
);

export default SigninPage;
