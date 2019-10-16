import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MobileMenu from '.';

export default { title: 'Mobile Menu' };

export const Mobile = () => <MobileMenu />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
