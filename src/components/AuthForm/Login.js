import React from 'react';
import { Link } from 'gatsby';

import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const LoginForm = () => (
  <styled.Wrapper>
    <styled.Box>
      <styled.H400>Log In</styled.H400>
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
        Log In
      </Button>
    </styled.Box>
    <styled.Footer>
      <Link to="/forgot">Forgot your password?</Link>
      <Link to="/register">Create Account</Link>
    </styled.Footer>
  </styled.Wrapper>
);

export default LoginForm;
