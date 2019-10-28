import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import useForm from 'react-hook-form';
import get from 'lodash/get';
import Cookies from 'js-cookie';

import { signin } from '@utils/shopify';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const SigninForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async data => {
    setLoading(true);

    try {
      const { accessToken, errors, expiresAt, userErrors } = await signin(data);

      if (get(errors, 'length')) {
        throw new Error();
      }

      if (get(userErrors, 'length')) {
        userErrors.forEach(err => {
          const errors = {};

          if (err.field && err.field.includes('email')) {
            errors.email = err.message;
          }

          if (err.field && err.field.includes('password')) {
            errors.password = err.message;
          }

          if (err.message && err.message.includes('Unidentified')) {
            errors.general = 'We couldn\'t find an account matching that email.';
          }

          setErrors(errors);
        });
        setLoading(false);
      } else if (accessToken) {
        Cookies.set('_sb_access_token', accessToken, {
          expires: new Date(expiresAt),
        });

        navigate('/account');
      }
    } catch (err) {
      setLoading(false);
      setErrors({
        general: 'Uh oh, something went wrong. Please try again later.',
      });
    }
  };

  return (
    <styled.Wrapper>
      <styled.Box>
        <styled.H400>Sign In</styled.H400>
        <styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={get(errors, 'email')}
            label="Email"
            name="email"
            placeholder="email@example.com"
            ref={register}
            type="email"
          />
          <Input
            error={get(errors, 'password')}
            label="Password"
            name="password"
            placeholder="**************"
            ref={register}
            type="password"
          />
          <Button disabled={loading} fullWidth type="submit">
            Sign In
          </Button>
        </styled.Form>
        {get(errors, 'general') && (
          <styled.ErrorText>{errors.general}</styled.ErrorText>
        )}
      </styled.Box>
      <styled.Footer>
        <Link to="/forgot">Forgot your password?</Link>
        <Link to="/register">Create Account</Link>
      </styled.Footer>
    </styled.Wrapper>
  );
};

export default SigninForm;
