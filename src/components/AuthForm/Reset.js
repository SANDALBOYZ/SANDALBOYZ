import React, { useState } from 'react';
import { navigate } from 'gatsby';
import useForm from 'react-hook-form';
import get from 'lodash/get';
import Cookies from 'js-cookie';

import { reset } from '@utils/shopify';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const ResetForm = ({ id, token }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async ({ password }) => {
    setLoading(true);

    try {
      const customerId = window.btoa(`gid://shopify/Customer/${id}`);
      const { accessToken, errors, expiresAt, userErrors } = await reset(
        customerId,
        {
          resetToken: token,
          password,
        }
      );

      if (get(errors, 'length')) {
        throw new Error();
      }

      if (get(userErrors, 'length')) {
        userErrors.forEach(err => {
          const errors = {};

          if (err.field && err.field.includes('password')) {
            errors.password = err.message;
          }

          if (err.message && err.message === 'Invalid reset token') {
            throw new Error();
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
        <styled.H400>Enter your new password</styled.H400>
        <styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={get(errors, 'password')}
            label="New password"
            name="password"
            placeholder="**************"
            ref={register}
            type="password"
          />
          <Button disabled={loading} fullWidth type="submit">
            Reset password
          </Button>
        </styled.Form>
        {get(errors, 'general') && (
          <styled.ErrorText>{errors.general}</styled.ErrorText>
        )}
      </styled.Box>
    </styled.Wrapper>
  );
};

export default ResetForm;
