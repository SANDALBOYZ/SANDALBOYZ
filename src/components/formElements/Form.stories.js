import React from 'react';
import styled from 'styled-components';

import space from '@utils/space';
import CheckboxComponent from './Checkbox';
import InputComponent from './Input';
import SelectComponent from './Select';
import TextareaComponent from './Textarea';

const Form = styled.form`
  width: 600px;

  & > *:not(:last-child) {
    margin-bottom: ${space[2]};
  }
`;

export default { title: 'Form Elements ' };

export const Checkbox = () => (
  <Form>
    <CheckboxComponent checked label="I agree to terms" />
    <CheckboxComponent label="Send me spam" />
  </Form>
);

export const Input = () => (
  <Form>
    <InputComponent label="First name" name="name" placeholder="First name" />
    <InputComponent error="This email is already taken" name="email" placeholder="email@example.com" size="large" />
    <InputComponent name="name" placeholder="First name" size="xlarge" />
  </Form>
);

export const Select = () => (
  <Form>
    <SelectComponent
      label="Color"
      name="name"
      options={[
        { name: 'Red', value: 'red' },
        { name: 'Green', value: 'green' },
        { name: 'Blue', value: 'blue' },
      ]}
    />
  </Form>
);

export const Textarea = () => (
  <Form>
    <TextareaComponent name="name" placeholder="Write something..." />
  </Form>
);
