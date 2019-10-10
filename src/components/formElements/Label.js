import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '@utils/colors';
import { Detail } from '@utils/type';

const StyledDetail = styled(Detail)`
  color: ${colors.N600};
`;

const StyledLabel = styled.label`
  display: block;
`;

const Label = ({ children, text, ...rest }) => (
  <StyledLabel {...rest}>
    <StyledDetail>{text}</StyledDetail>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
};

export default Label;
