import React from 'react';

import Head from '@utils/seo';
import Header from '@components/Header';
import RegisterForm from '@components/AuthForm/Register';

const RegisterPage = () => (
  <>
    <Head title="Register" />
    <Header label="Create Account" shrinkOnMobile theme="dark" title="Join the team" />
    <RegisterForm />
  </>
);

export default RegisterPage;
