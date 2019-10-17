import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import Label from './Label';

const StyledTextarea = styled.textarea`
  display: block;
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  min-height: 110px;
  max-height: 220px;
  width: 100%;
  padding: ${space[1]};
  font-size: 16px;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-radius: 0;
  appearance: none;
  resize: vertical;

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }
`;

const Textarea = React.forwardRef(({ label, name, size, type, ...rest }, ref) => {
  const textarea = <StyledTextarea name={name} ref={ref} size={size} {...rest} />;

  if (label) {
    return (
      <Label htmlFor={name} text={label}>
        {textarea}
      </Label>
    );
  }

  return textarea;
});

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'xlarge']),
};

export default Textarea;
