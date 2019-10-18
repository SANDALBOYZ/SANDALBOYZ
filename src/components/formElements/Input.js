import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import { mq } from '@utils/styles';
import Label from './Label';

const getInputHeight = ({ size }) =>
  get(
    {
      large: css`
        height: 45px;

        ${mq.gtmd} {
          height: 50px;
        }
      `,
      xlarge: css`
        height: 45px;

        ${mq.gtmd} {
          height: 60px;
        }
      `,
    },
    size,
    css`
      height: 40px;
    `
  );

const ErrorText = styled.div`
  margin-top: ${space[0]};
  color: ${colors.NEGATIVE};
  font-size: 12px;
  line-height: 1;
`;

const StyledInput = styled.input`
  display: block;
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  width: 100%;
  padding: 0 ${space[1]};
  font-size: 16px;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-radius: 0;
  appearance: none;
  ${getInputHeight};

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }
`;

const Input = React.forwardRef(({ error, label, name, size, type, ...rest }, ref) => {
  let input = <StyledInput name={name} ref={ref} size={size} type={type} {...rest} />;

  if (error) {
    input = (
      <div>
        {input}
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  }

  if (label) {
    return (
      <Label htmlFor={name} text={label}>
        {input}
      </Label>
    );
  }

  return input;
});

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'xlarge']),
  type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text']),
};

export default Input;
