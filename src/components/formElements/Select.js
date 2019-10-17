import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import Icon from '@components/Icon';
import Label from './Label';

const SelectContainer = styled.div`
  position: relative;
  height: 40px;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};

  &:focus-within {
    border-color: ${colors.N500};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: ${space[1]};
  bottom: 0;
  margin: auto 0;
  height: 24px;
  pointer-events: none;
`;

export const selectStyles = css`
  display: block;
  height: 38px;
  width: 100%;
  padding: 0 ${space[6]} 0 ${space[1]};
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  font-size: 16px;
  line-height: 38px;
  background-color: transparent;
  border: none;
  appearance: none;

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
  }
`;

const StyledSelect = styled.select`
  ${selectStyles};
`;

const Select = ({ children, label, name, options, ...rest }) => {
  const select = (
    <SelectContainer>
      {children || (
        <StyledSelect name={name} {...rest}>
          {options.map(({ disabled, name, value }) => (
            <option value={value} key={value} disabled={disabled}>
              {name}
            </option>
          ))}
        </StyledSelect>
      )}
      <StyledIcon name="chevron-down" />
    </SelectContainer>
  );

  if (label) {
    return (
      <Label htmlFor={name} text={label}>
        {select}
      </Label>
    );
  }

  return select;
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default Select;
