import React, { useState } from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import get from 'lodash/get';

import space from '@utils/space';
import Button from '@components/Button';
import { Actions } from '@components/Drawer/styles';
import Checkbox from '@components/formElements/Checkbox';
import Input from '@components/formElements/Input';
import Select, { selectStyles } from '@components/formElements/Select';

const Form = styled.form`
  & > * {
    margin-bottom: ${space[3]};
  }
`;

const Group = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: ${space[3]};
  }

  & > * {
    flex: 1;
  }
`;

const custom = {
  CountryDropdown: styled(CountryDropdown)`
    ${selectStyles}
  `,
  RegionDropdown: styled(RegionDropdown)`
    ${selectStyles}
  `,
};

const AddressForm = ({ initialValues = {}, onCancel, onSubmit }) => {
  const { errors, handleSubmit, register } = useForm({
    defaultValues: initialValues,
  });
  const [defaultAddress, setDefaultAddress] = useState(true);
  const [region, setRegion] = useState(get(initialValues, 'provinceCode', ''));
  const [country, setCountry] = useState(get(initialValues, 'country', ''));

  const onDefaultChange = evt => {
    setDefaultAddress(evt.target.checked);
  };

  const onFormSubmit = data => {
    onSubmit({ ...data, country, province: region }, defaultAddress);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Group>
        <Input
          label="First Name"
          name="firstName"
          placeholder="Jane"
          ref={register({ required: true })}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          ref={register({ required: true })}
        />
      </Group>
      <Input
        label="Address Line 1"
        name="address1"
        placeholder="1234 Paradise Blvd."
        ref={register({ required: true })}
      />
      <Input
        label="Address Line 2"
        name="address2"
        placeholder="Ste 567"
        ref={register}
      />
      <Group>
        <Input label="City" name="city" ref={register({ required: true })} />
        <Select label="Country">
          <custom.CountryDropdown
            priorityOptions={['US', 'ID', 'CA', 'GB']}
            value={country}
            onChange={val => {
              setCountry(val);
            }}
          />
        </Select>
      </Group>
      <Select label="Region">
        <custom.RegionDropdown
          country={country}
          value={region}
          valueType="short"
          onChange={val => {
            setRegion(val);
          }}
        />
      </Select>
      <Group>
        <Input
          label="Postal / ZIP Code"
          name="zip"
          ref={register({ required: true })}
        />
        <Input
          label="Phone"
          name="phone"
          ref={register}
          type="tel"
        />
      </Group>
      <Checkbox
        checked={defaultAddress}
        onChange={onDefaultChange}
        label="Set as default address"
        name="default"
      />
      <Actions>
        <Button fullWidth onClick={onCancel} theme="outline">
          Cancel
        </Button>
        <Button disabled={errors.length} external fullWidth type="submit">
          Confirm Address
        </Button>
      </Actions>
    </Form>
  );
};

export default AddressForm;
