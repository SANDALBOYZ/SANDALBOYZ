import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Subscribe from '.';

export default { title: 'Subscribe' };

export const Desktop = () => <Subscribe />;

export const Mobile = () => <Subscribe />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
