import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import Label from './Label';

const getInputHeight = ({ size }) =>
  get(
    {
      large: '50px',
      xlarge: '60px',
    },
    size,
    '40px'
  );

const StyledInput = styled.input`
  display: block;
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  height: ${getInputHeight};
  width: 100%;
  padding: 0 ${space[1]};
  font-size: 15px;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  appearance: none;

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }
`;

const Input = ({ label, name, size, type, ...rest }) => {
  const input = <StyledInput name={name} size={size} type={type} {...rest} />;

  if (label) {
    return (
      <Label htmlFor={name} text={label}>
        {input}
      </Label>
    );
  }

  return input;
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'xlarge']),
  type: PropTypes.oneOf(['email', 'text', 'password']),
};

export default Input;
