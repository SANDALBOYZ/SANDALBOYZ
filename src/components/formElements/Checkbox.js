import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Detail } from '@utils/type';
import Icon from '@components/Icon';

const NativeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  margin: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 20px;
  width: 20px;
  background-color: ${props => props.checked ? colors.N700 : colors.N100};
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  fill: ${props => props.checked ? colors.N0 : colors.N400};
  height: 20px;
  pointer-events: none;
`;

const StyledLabel = styled(Detail)`
  margin-left: ${space[2]};
`;

const StyledWrapper = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = ({ checked, label, name, onChange }) => {
  return (
    <StyledWrapper>
      <StyledCheckbox checked={checked}>
        <NativeCheckbox checked={checked} name={name} onChange={onChange} />
        <StyledIcon checked={checked} name="check" />
      </StyledCheckbox>
      <StyledLabel>{label}</StyledLabel>
    </StyledWrapper>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
