import React from 'react';
import styled from 'styled-components';

import colors from '@utils/colors';
import Icon from '.';

const StyledIcon = styled(Icon)`
  fill: ${colors.N900};
  height: 16px;
`;

export default { title: 'Icon ' };

export const arrowUp = () => <StyledIcon name="arrow-up" />;

export const briefcase = () => <StyledIcon name="briefcase" />;

export const chevronDown = () => <StyledIcon name="chevron-down" />;

export const chevronLeft = () => <StyledIcon name="chevron-left" />;

export const chevronRight = () => <StyledIcon name="chevron-right" />;

export const clipboard = () => <StyledIcon name="clipboard" />;

export const facebook = () => <StyledIcon name="facebook" />;

export const instagram = () => <StyledIcon name="instagram" />;

export const plus = () => <StyledIcon name="plus" />;

export const search = () => <StyledIcon name="search" />;

export const twitter = () => <StyledIcon name="twitter" />;
