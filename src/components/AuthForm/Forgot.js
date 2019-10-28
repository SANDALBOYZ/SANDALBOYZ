import React, { useState } from 'react';
import useForm from 'react-hook-form';
import get from 'lodash/get';

import { forgot } from '@utils/shopify';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

const ForgotForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = async ({ email }) => {
    setLoading(true);

    try {
      const { errors, userErrors } = await forgot(email);

      if (get(errors, 'length')) {
        throw new Error();
      }

      if (get(userErrors, 'length')) {
        userErrors.forEach(err => {
          const errors = {};

          if (err.code && err.code === 'UNIDENTIFIED_CUSTOMER') {
            errors.general = 'We couldn\'t find an account matching that email.';
          }

          setErrors(errors);
        });
      } else {
        setShowConfirmation(true);
      }
      setLoading(false);
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
        {showConfirmation ? (
          <>
            <styled.H400>
              Success
            </styled.H400>
            <styled.Body>
              Please check your email to reset your password
            </styled.Body>
          </>
        ) : (
          <>
            <styled.H400>Enter your email below</styled.H400>
            <styled.Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                error={get(errors, 'email')}
                label="Email"
                name="email"
                placeholder="email@example.com"
                ref={register}
                type="email"
              />
              <Button disabled={loading} fullWidth type="submit">
                Send password reset email
              </Button>
            </styled.Form>
            {get(errors, 'general') && (
              <styled.ErrorText>{errors.general}</styled.ErrorText>
            )}
          </>
        )}
      </styled.Box>
    </styled.Wrapper>
  );
};

export default ForgotForm;
