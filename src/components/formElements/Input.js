import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import { mq } from '@utils/styles';
import Label from './Label';

const getInputHeight = ({ hasPrefix, size }) =>
  get(
    {
      large: css`
        height: ${hasPrefix ? '43px' : '45px'};

        ${mq.gtmd} {
          height: ${hasPrefix ? '48px' : '50px'};
        }
      `,
      xlarge: css`
        height: ${hasPrefix ? '43px' : '45px'};

        ${mq.gtmd} {
          height: ${hasPrefix ? '58px' : '60px'};
        }
      `,
    },
    size,
    css`
      height: ${hasPrefix ? '38px' : '40px'};
    `
  );

const ErrorText = styled.div`
  margin-top: ${space[0]};
  color: ${colors.NEGATIVE};
  font-size: 12px;
  line-height: 1;
`;

const Prefix = styled.span`
  display: inline-flex;
  align-items: center;
  right: ${space[1]};
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  font-size: 16px;
`;

const StyledInput = styled.input`
  display: 'block';
  width: 100%;
  padding: 0 ${space[1]};
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
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

const Wrapper = styled.label`
  display: flex;
  position: relative;
  padding: 0 ${space[1]};
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-radius: 0;

  &:focus-within {
    border-color: ${colors.N500};
  }

  & ${StyledInput} {
    border: 0;

    &:focus {
      border: 0;
    }
  }
`;

const Input = React.forwardRef(
  ({ error, label, name, prefix, size, type, onChange, ...rest }, ref) => {
    let input = (
      <StyledInput
        name={name}
        ref={ref}
        size={size}
        type={type}
        hasPrefix={Boolean(prefix)}
        onChange={onChange}
        {...rest}
      />
    );

    const WrapperComp = prefix ? Wrapper : styled.div``;

    if (error) {
      input = (
        <WrapperComp>
          {prefix && <Prefix>{prefix}</Prefix>}
          {input}
          {error && <ErrorText>{error}</ErrorText>}
        </WrapperComp>
      );
    }

    if (label) {
      return (
        <Label htmlFor={name} text={label}>
          {input}
        </Label>
      );
    }

    if(onChange) {
      return (
        <div>
        {input}
        </div>
      )
    }

    return (
      
        <WrapperComp>
        {prefix && <Prefix>{prefix}</Prefix>}
        {input} 
        </WrapperComp>
      
    );
  }
);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'xlarge']),
  type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text']),
};

export default Input;
