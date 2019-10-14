import React from 'react';

import Head from '@utils/seo';
import Header from '@components/Header';
import LoginForm from '@components/AuthForm/Login';

const LoginPage = () => (
  <>
    <Head title="Log in" />
    <Header label="Log In" theme="dark" title="Welcome Back" />
    <LoginForm />
  </>
);

export default LoginPage;
