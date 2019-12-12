import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Popup from '.';

export default { title: 'Popup' };

export const Desktop = () => (
  <Popup
    description="Quisque fermentum tempor pretium. Maecenas vel elit eu sapien lobortis scelerisque. Ut non dolor diam. Qui sque sagittis ultrices nunc in rhoncus. Pellentesque at."
    image="https://source.unsplash.com/random/2000x1500"
    label="Holiday Deals"
    open
    title="Up to 70% off!"
  />
);

export const Mobile = () => (
  <Popup
    description="Quisque fermentum tempor pretium. Maecenas vel elit eu sapien lobortis scelerisque. Ut non dolor diam. Qui sque sagittis ultrices nunc in rhoncus. Pellentesque at."
    image="https://source.unsplash.com/random/2000x1500"
    label="Holiday Deals"
    open
    title="Up to 70% off!"
  />
);

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
