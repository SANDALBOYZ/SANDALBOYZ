import React from 'react';
import styled from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import colors from '@utils/colors';
import Navigation from '.';

export default { title: 'Navigation ' };

export const DesktopDark = () =>
  <Navigation
    menuOpen={false}
    onCartClose={() => console.log('onCartClose')}
    onCartOpen={() => console.log('onCartOpen')}
    onMenuClose={() => console.log('onMenuClose')}
  />;

const DarkBackground = styled.div`
  background-color: ${colors.N700};
  width: 100vw;
  height: 300px;
`;

export const DesktopLight = () => (
  <DarkBackground>
    <Navigation
      light
      menuOpen={false}
      onCartClose={() => console.log('onCartClose')}
      onCartOpen={() => console.log('onCartOpen')}
      onMenuClose={() => console.log('onMenuClose')}
    />
  </DarkBackground>
);

export const MobileDark = () =>
  <Navigation
    menuOpen={false}
    onCartClose={() => console.log('onCartClose')}
    onCartOpen={() => console.log('onCartOpen')}
    onMenuClose={() => console.log('onMenuClose')}
  />;

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
    <Navigation
      light
      menuOpen={false}
      onCartClose={() => console.log('onCartClose')}
      onCartOpen={() => console.log('onCartOpen')}
      onMenuClose={() => console.log('onMenuClose')}
    />
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
