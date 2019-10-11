import React from 'react';
import styled from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import colors from '@utils/colors';
import Navigation from '.';

export default { title: 'Navigation ' };

export const desktopDark = () => <Navigation />;

const DarkBackground = styled.div`
  background-color: ${colors.N700};
`;

export const desktopLight = () => (
  <DarkBackground>
    <Navigation light />
  </DarkBackground>
);

export const MobileDark = () => <Navigation />;

MobileDark.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const MobileLight = () => (
  <DarkBackground>
    <Navigation light />
  </DarkBackground>
);

MobileLight.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
