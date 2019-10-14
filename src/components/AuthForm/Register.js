import React from 'react';
import { Link } from 'gatsby';

import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const RegisterForm = () => (
  <styled.Wrapper>
    <styled.Box>
      <styled.H400>Create a new account</styled.H400>
      <styled.Form>
        <Input
          label="Email"
          name="email"
          placeholder="email@example.com"
          type="email"
        />
        <Input
          label="Password"
          name="password"
          placeholder="**************"
          type="password"
        />
      </styled.Form>
      <Button fullWidth>
        Register
      </Button>
    </styled.Box>
    <styled.Footer centered>
      <Link to="/login">Already have an account? Log in</Link>
    </styled.Footer>
  </styled.Wrapper>
);

export default RegisterForm;
