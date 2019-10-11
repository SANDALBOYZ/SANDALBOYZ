import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Footer from '.';

export default { title: 'Footer' };

export const Desktop = () => <Footer />;

export const Mobile = () => <Footer />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
