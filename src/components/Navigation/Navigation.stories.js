import React from 'react';
import styled from 'styled-components';

import colors from '@utils/colors';
import Navigation from '.';

export default { title: 'Navigation '};

export const desktopDark = () => <Navigation />;

const DarkBackground = styled.div`
  background-color: ${colors.N700};
`;

export const desktopLight = () => <DarkBackground><Navigation light /></DarkBackground>;
