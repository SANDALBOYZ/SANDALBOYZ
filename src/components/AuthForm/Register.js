import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import useForm from 'react-hook-form';
import get from 'lodash/get';
import Cookies from 'js-cookie';

import { signin, register as registerUser } from '@utils/shopify';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const RegisterForm = () => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [generalError, setGeneralError] = useState();

  const onSubmit = async data => {
    setLoading(true);

    try {
      const { customer, errors, userErrors } = await registerUser(data);

      if (get(errors, 'length')) {
        throw new Error();
      }

      if (get(userErrors, 'length')) {
        userErrors.forEach(err => {
          if (err.field.includes('email')) {
            setEmailError(err.message);
          }

          if (err.field.includes('password')) {
            setPasswordError(err.message);
          }
        });
        setLoading(false);
      } else if (get(customer, 'id')) {
        const { accessToken, errors, expiresAt } = await signin(data);

        if (get(errors, 'length')) {
          throw new Error();
        }

        Cookies.set('_sb_access_token', accessToken, {
          expires: new Date(expiresAt),
        });

        navigate('/account');
      }
    } catch (err) {
      setLoading(false);
      setGeneralError('Uh oh, something went wrong. Please try again later.');
    }
  };

  return (
    <styled.Wrapper>
      <styled.Box>
        <styled.H400>Create a new account</styled.H400>
        <styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={emailError}
            label="Email"
            name="email"
            placeholder="email@example.com"
            type="email"
            ref={register}
          />
          <Input
            error={passwordError}
            label="Password"
            name="password"
            placeholder="**************"
            type="password"
            ref={register}
          />
          <Button disabled={loading} fullWidth type="submit">
            Register
          </Button>
        </styled.Form>
        {generalError && <styled.ErrorText>{generalError}</styled.ErrorText>}
      </styled.Box>
      <styled.Footer centered>
        <Link to="/signin">Already have an account? Sign in</Link>
      </styled.Footer>
    </styled.Wrapper>
  );
};

export default RegisterForm;
